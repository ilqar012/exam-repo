import React from "react";
import "../../Components/Client/index.scss";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const ClientHeader = () => {
  return (
    <>
      <header>
        <Container>
          <div className="navbar">
            <a className="eatwell" href="#">
              EATWELL
            </a>
            <MenuIcon className="menuicon"/>
            <ul>
              <li>
                <Button className="navbar-button">
                  <Link className="navbar-link" to={"/"}>
                    Home
                  </Link>
                </Button>
              </li>
              <li>
                <Button className="navbar-button">
                  <Link className="navbar-link" to={"/add-product"}>
                    Add Product
                  </Link>
                </Button>
              </li>
              <li>
                <Button className="navbar-button">
                  <Link className="navbar-link" to={"/basket"}>
                    Basket
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
          <div className="text">
            <h1>Welcome To EatWell</h1>
            <span>Come and eat well with our delicious & healthy foods.</span>
            <button className="reserv">Reservation</button>
          </div>
        </Container>
      </header>
    </>
  );
};

export default ClientHeader;
