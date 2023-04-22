import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Form.css";

function Form() {
  const [day, setDay] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [hoursSlept, setHoursSlept] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Day: ${day}, Symptoms: ${symptoms}, Hours Slept: ${hoursSlept}`
    );
  };

  return (
    <>
      <Navbar />
      <style>{"body {  background-color: #F4F8FA }"}</style>
      <h3 className="text">SEGUIMIENTO DE TUS MIGRAÑAS</h3>
      <div className="Form">
  <form onSubmit={handleSubmit}>
    <div className="form-row">
      <div className="form-group">
        <label>Día:</label>
        <input
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Horas de sueño:</label>
        <input
          type="time"
          value={hoursSlept}
          onChange={(e) => setHoursSlept(e.target.value)}
        />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label>Deporte:</label>
        <div>
          <label for="option1">
            <input type="radio" id="option1" name="option" value="option1" />{" "}
            Si
          </label>

          <label for="option2">
            <input type="radio" id="option2" name="option" value="option2" />{" "}
            No
          </label>

        </div>
      </div>

      <div className="form-group">
        <label>Sensación térmica:</label>
        <div>
          <label for="option1">
            <input type="radio" id="option3" name="option" value="option3" />{" "}
            Fría
          </label>

          <label for="option2">
            <input type="radio" id="option3" name="option" value="option3" />{" "}
            Cálida
          </label>
        </div>
      </div>
    </div>

    <div className="form-group">
      <label>Observaciones:</label>
      <input className="observations"
        type="number"
        value={hoursSlept}
        onChange={(e) => setHoursSlept(e.target.value)}
      />
    </div>
    
    <button className="save" type="submit">
      Guardar
    </button>
  </form>
</div>
      <Footer />
    </>
  );
}

export default Form;
