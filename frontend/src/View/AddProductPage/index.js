import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";

function AddProductPage() {
    let { id } = useParams();
    const [product, setproduct] = useState([]);
    useEffect(() => {
      

        axios.get("http://localhost:3000/categories/" + id).then((response) => {
            setproduct(response.data);
        });
    }, [id]);
    return (
      <div>
        <Helmet>
          <title>{product.name}</title>
        </Helmet>
        <Navbar />
        <div className="main">
          <div className="card" style={{ width: "18rem" }}>
            <img src={product.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.id}</p>
              <Link to={"/"}><button>back</button></Link>
            </div>
          </div>
        </div>
      </div>
  );
}

export default AddProductPage;
