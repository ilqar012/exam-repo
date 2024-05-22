import React from "react";
import { Button, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByIDQuery } from "../../../Services/productApi";

const DetailProduct = () => {
  const { id } = useParams();
  const { data } = useGetProductByIDQuery(id);
  console.log(data);
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          marginTop: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data && (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            key={data.data._id}
            style={{ textAlign: "center" }}
          >
            <img
              style={{ width: "350px", height: "320px" }}
              src={data.data.imgSrc}
              alt={data.data.title}
            />
            <h3>{data.data.title}</h3>
            <h5 style={{ padding: "10px 0px" }}>${data.data.price}</h5>
            <h5>{data.data.disCountedPrice}</h5>
            <Button
              onClick={() => {
                navigate(-1);
              }}
              variant="contained"
              color="error"
            >
              Go Back
            </Button>
          </Grid>
        )}
      </div>
    </>
  );
};

export default DetailProduct;
