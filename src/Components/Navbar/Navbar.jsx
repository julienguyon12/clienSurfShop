import React, { useState, useEffect } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useLocation } from "react-router-dom";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const [expendNavbar, setExpendNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpendNavbar(false);
  }, [location]);
  return (
    <div className="navbar" id={expendNavbar ? "on" : "off"}>
      <div className="wrapper">
        <div className="toggleButton">
          <button
            onClick={() => {
              setExpendNavbar((prev) => !prev);
            }}
          >
            <ReorderIcon />
          </button>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/products/1">Shortboards</Link>
          <Link to="/products/3">Longboards</Link>
          <Link to="/products/2">Funboards</Link>
          <Link to="/products/4">Accessories</Link>
        </div>
        <div className="center">
          <Link to="/" className="link">
            MonP'titSurfShop
          </Link>
        </div>
        <div className="icons">
          <SearchIcon className="icon" />
          <PersonOutlineIcon className="icon" />
          <FavoriteBorder className="icon" />
          <div className="carticon" onClick={(e) => setOpen(!open)}>
            <ShoppingCartOutlinedIcon />
            <span>{products.length}</span>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
