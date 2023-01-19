import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";

function ProductPage() {
  const [product, setproduct] = useState([]);
  useEffect(() => {

      axios.get("http://localhost:3000/categories").then((response) => {
        setproduct(response.data);

    });
  }, []);
 
 const deletefunc=(id) => {
    axios.delete(`http://localhost:3000/categories/${id}`)
    .then(res=>{
        axios.get("http://localhost:3000/categories").then((res)=>{
            setproduct(res.data)
        })
    })

} 
  return (
    <div>
      <Helmet>
        <title>Product Page</title>
      </Helmet>
      <Navbar />
      <> 
      {product.map((element) => {
    
          return (
          <div className="main" key={element.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={element.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{element.name}</h5>
                <p className="card-text">{element.description}</p>
                <p className="card-text">{element.id}</p>
                <Link to={`/add/${element.id}`}>
                  <button>Add</button>
                </Link>
                <button onClick={()=>deletefunc(element.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        );

    })}
    </>
    </div>
  );
}

export default ProductPage;
