import React, { useState } from "react";
import "../Home/index.scss";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { useGetAllProductsQuery } from "../../../Services/productApi";
import DetailsIcon from "@mui/icons-material/Details";

const Home = () => {
  const { data: products, refetch } = useGetAllProductsQuery();

  const [category, setCategory] = useState("all");

  return (
    <>
      <section className="header-section">
        <Container>
          <div className="container-div">
            <h6>SPRING / SUMMER COLLECTION 2017</h6>
            <h2>Get up to 30% Off New Arrivals</h2>
            <Link className="link">SHOP NOW</Link>
          </div>
        </Container>
      </section>
      <section className="card-section">
        <Container>
          <div className="txt">
            <h3>New Arrivals</h3>
            <span></span>
          </div>
          <div className="button-div">
            <button
              onClick={() => {
                setCategory("all");
              }}
            >
              ALL
            </button>
            <button
              onClick={() => {
                setCategory("women");
              }}
            >
              WOMEN'S
            </button>
            <button
              onClick={() => {
                setCategory("accessories");
              }}
            >
              ACCESSORIES
            </button>
            <button
              onClick={() => {
                setCategory("men");
              }}
            >
              MEN'S
            </button>
          </div>
          <div className="card">
            <Grid container spacing={3}>
              {category === "all"
                ? products?.data.map((product) => {
                    return (
                      <Grid item xs={12} lg={3} md={4} key={product._id}>
                        <Card className="grid-card">
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="180"
                              image={product.imgSrc}
                              alt={product.title}
                            />
                            <Button className="grid-card-button">
                              <Link to={`products/${product._id}`}>
                                <DetailsIcon />
                              </Link>
                            </Button>
                            <CardContent>
                              <Typography
                                style={{ fontSize: "14px" }}
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                {product.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                ${product.price}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <button className="card-button">ADD TO CARD</button>
                        </Card>
                      </Grid>
                    );
                  })
                : products.data
                    .filter((a) => a.category === category)
                    .map((product) => {
                      return (
                        <Grid item xs={12} lg={3} md={4} key={product._id}>
                          <Card className="grid-card">
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="180"
                                image={product.imgSrc}
                                alt={product.title}
                              />
                              <Button className="grid-card-button">
                                <Link to={`products/${product._id}`}>
                                  <DetailsIcon />
                                </Link>
                              </Button>
                              <CardContent>
                                <Typography
                                  style={{ fontSize: "14px" }}
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                >
                                  {product.title}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  ${product.price}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            <button className="card-button">ADD TO CARD</button>
                          </Card>
                        </Grid>
                      );
                    })}
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
