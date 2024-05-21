import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Table } from "@mui/material";
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
      title: "description",
      dataIndex: "description",
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
  const { data, refetch } = useGetAllProductsQuery();
  const [postProduct] = usePostProductMutation();
  const formik = useFormik({
    initialValues: {
      imgSrc: "",
      title: "",
      description: "",
      price: "",
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
          name="description"
          id="outlined-basic"
          label="Description"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.errors.description && formik.touched.description && (
          <div id="feedback">{formik.errors.description}</div>
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
        <Button variant="contained" danger type="primary">
          Add Product
        </Button>
      </form>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  );
};

export default AddProduct;
