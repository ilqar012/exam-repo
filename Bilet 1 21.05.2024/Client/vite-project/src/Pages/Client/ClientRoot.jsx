import React from "react";
import ClientHeader from "../../Components/Client";
import { Outlet } from "react-router-dom";

const ClientRoot = () => {
  return (
    <div>
      <ClientHeader />
      <Outlet />
    </div>
  );
};

export default ClientRoot;
