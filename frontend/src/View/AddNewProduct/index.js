import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "../../Components/Navbar";
import { Helmet } from "react-helmet";
import axios from "axios";

function AddNewProduct() {
  return (
    <Formik
      initialValues={{ name: "", description: ""}}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
          description: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
         
      })}
      onSubmit={(values) => {
        axios.post("http://localhost:3000/categories",values)
      }}
      
    >
      <Form>
        <Helmet>
          <title>Add New Product Page</title>
        </Helmet>
        <Navbar />
        <br></br>
      
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <div><ErrorMessage name="name" /></div>
        

        <label htmlFor="description">Description</label>
        <Field name="description" type="text" />
        <div><ErrorMessage name="description" /></div>
        

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default AddNewProduct;
