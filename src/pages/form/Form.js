import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Form.css";
import FormList from "../../components/formList/FormList";

function Form() {
  return (
    <>
      <Navbar />
      <div className="Section">
        <style>{"body {  background-color: #F4F8FA }"}</style>
        <h3 className="text">SEGUIMIENTO DE TUS MIGRAÑAS</h3>
        <FormList />
      </div>
      <Footer />
    </>
  );
}

export default Form;
