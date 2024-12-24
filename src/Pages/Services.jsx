import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Services = () => {
  const { pathname } = useLocation();
  const [show, setShow] = useState("services");
  return (
    <div>
      {/* {pathname === "/services" && "Welcome, these are our services"} */}
      {show === "services" && "Welcome, these are our services"}
      <div style={{ display: "flex", gap: "10px" }}>
        <Link
          to={"/services/marketing"}
          style={{ textDecoration: "none" }}
          onClick={() => {
            setShow("marketing");
          }}
        >
          Marketing
        </Link>
        <Link
          to={"/services/dev"}
          style={{ textDecoration: "none" }}
          onClick={() => {
            setShow("dev");
          }}
        >
          Dev
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Services;
