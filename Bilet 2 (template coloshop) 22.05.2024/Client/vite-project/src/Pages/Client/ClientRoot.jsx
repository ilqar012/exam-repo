import React from "react";
import ClientHeader from "../../Components/Client";
import { Outlet } from "react-router-dom"

const ClientRoot = () => {
  return <>
  <ClientHeader/>
  <Outlet/>
  </>;
};

export default ClientRoot;
