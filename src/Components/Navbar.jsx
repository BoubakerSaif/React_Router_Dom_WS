import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "aquamarine",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Link to={"/"} style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link to={"/services"} style={{ textDecoration: "none" }}>
        Services
      </Link>
      <Link to={"/profile/12"} style={{ textDecoration: "none" }}>
        Profile
      </Link>
    </div>
  );
};

export default Navbar;
