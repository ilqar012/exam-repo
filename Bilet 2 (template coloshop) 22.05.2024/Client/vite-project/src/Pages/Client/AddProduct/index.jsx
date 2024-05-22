import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  useGetAllProductsQuery,
  usePostProductMutation,
} from "../../../Services/productApi";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { ProductSchema } from "../../../validations/productSchema";

const AddProduct = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "disCount",
      dataIndex: "disCount",
    },
    {
      title: "price",
      dataIndex: "price",
    },
    {
      title: "Image",
      dataIndex: "Image",
      render: (imgSrc) => {
        <img src={imgSrc} alt="product image" />;
      },
    },
  ];
  const { data: products, refetch } = useGetAllProductsQuery();
  const [postProduct] = usePostProductMutation();
  const formik = useFormik({
    initialValues: {
      imgSrc: "",
      title: "",
      price: "",
      disCount: "",
    },
    validationSchema: ProductSchema,
    onSubmit: (values, { resetForm }) => {
      postProduct(values).then(() => {
        Swal.fire({
          title: "Added to swapper-card!",
          text: "You clicked the button!",
          icon: "success",
        });
        resetForm();
        refetch();
      });
    },
  });
  return (
    <>
      <div style={{ width: "40%", margin: "50px auto", padding: "100px 0" }}>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          onSubmit={formik.handleSubmit}
        >
          <h3 style={{ textAlign: "center" }}>Add Product</h3>
          <TextField
            name="imgSrc"
            id="outlined-basic"
            label="Image Url"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.imgSrc}
          />
          {formik.errors.imgSrc && formik.touched.imgSrc && (
            <div id="feedback">{formik.errors.imgSrc}</div>
          )}
          <TextField
            name="title"
            id="outlined-basic"
            label="Title"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.title && formik.touched.title && (
            <div id="feedback">{formik.errors.title}</div>
          )}
          <TextField
            name="price"
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.errors.price && formik.touched.price && (
            <div id="feedback">{formik.errors.price}</div>
          )}
          <TextField
            name="disCount"
            id="outlined-basic"
            label="DisCount percent"
            variant="outlined"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.disCount}
          />
          {formik.errors.disCount && formik.touched.disCount && (
            <div id="feedback">{formik.errors.disCount}</div>
          )}
          <TextField
            name="category"
            id="outlined-basic"
            label="Category (men or women or accessorioes)"
            variant="outlined"
            type="string"
            onChange={formik.handleChange}
            value={formik.values.category}
          />
          {formik.errors.category && formik.touched.category && (
            <div id="feedback">{formik.errors.category}</div>
          )}
          <Button variant="contained" danger type="primary">
            Add Product
          </Button>
        </form>
        <Table
          columns={columns}
          dataSource={products}
          onChange={handleChange}
        />
      </div>

      <div>
        <Container>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products?.data.map((row) => (
                  <TableRow
                    key={row.title}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img src={row.imgSrc} alt="" width={100} />
                    </TableCell>
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="center">${row.price}</TableCell>
                    <TableCell align="center">
                      <Button variant="outlined" color="error">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </>
  );
};

export default AddProduct;
