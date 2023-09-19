import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="/img/julien-git2.jpg" alt="" />
              <button>
                <Link to="/products/1" className="link">
                  Shortboard
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="/img/IMG_0752.jpg" alt="" />
              <button>
                <Link to="/products/2" className="link">
                  Fish
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="/img/IMG_1729.PNG" alt="" />
          <button>
            <Link to="/products/3" className="link">
              Longboard
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="/img/accessoire.jpg" alt="" />
          <button>
            <Link to="/products/1" className="link">
              Accessories
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
