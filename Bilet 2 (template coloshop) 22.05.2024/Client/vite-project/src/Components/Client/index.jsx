import React from "react";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import "../Client/index.scss";
import MenuIcon from '@mui/icons-material/Menu';

const ClientHeader = () => {
  return (
    <>
      <header>
        <Container>
          <div className="container-div">
            <h3>
              COLO<span>SHOP</span>
            </h3>
            <MenuIcon className="menuicon"/>
            <ul>
              <li>
                <Link className="link" to={"/"}>HOME</Link>
              </li>
              <li>
                <Link className="link" to={"/add-product"}>ADD PRODUCT</Link>
              </li>
              <li>
                <Link className="link" to={"/basket"}>BASKET</Link>
              </li>
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
};

export default ClientHeader;
