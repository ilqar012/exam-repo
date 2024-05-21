import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Home/index.scss";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "@mui/material";
import { useGetAllProductsQuery } from "../../../Services/productApi";

const Home = () => {
  const { data: products, refetch } = useGetAllProductsQuery();

  return (
    <>
      <section className="section">
        <Container>
          <div className="text-div">
            <p>OUR OFFERS</p>
            <h2>Our Offer This Summer</h2>
            <span>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </span>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            loop
            // pagination={{
            //   clickable: true,
            // }}
            // modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 320px
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              992: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {products &&
              products.data.map((product) => {
                return (
                  <SwiperSlide>
                    <Card
                      style={{ borderRadius: 0 }}
                      sx={{ maxWidth: 360 }}
                      key={product._id}
                    >
                      <CardMedia
                        sx={{ height: 250 }}
                        image={product.imgSrc}
                        title={product.title}
                      />
                      <CardContent style={{ paddingTop: "50px" }}>
                        <Typography
                          style={{ color: "#FDA403", fontSize: "20px" }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          $ {product.price}
                        </Typography>
                        <Typography
                          style={{ fontSize: "24px", fontWeight: "bold" }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {product.title}
                        </Typography>
                        <Typography
                          style={{
                            padding: "0px 40px",
                            fontSize: "16px",
                          }}
                          variant="body2"
                          color="text.secondary"
                        >
                          {product.description}
                        </Typography>
                      </CardContent>
                      <Button
                        style={{
                          textAlign: "center",
                          backgroundColor: "#cb8402",
                          background: "#cb8402",
                          padding: "5px 10px",
                        }}
                        size="small"
                      >
                        <Link
                          style={{
                            textDecoration: "none",
                            fontSize: "12px",
                            color: "white",
                          }}
                          to={"#"}
                        >
                          Order Now!
                        </Link>
                      </Button>
                    </Card>{" "}
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </Container>
      </section>
    </>
  );
};

export default Home;
