import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Form.css";
import FormList from "../../components/formList/FormList";

const calculateSleepDuration = (bedtime, wakeup) => {
  if (!bedtime || !wakeup) return "";

  const bedtimeArray = bedtime.split(":");
  const wakeupArray = wakeup.split(":");

  const bedtimeInMinutes = parseInt(bedtimeArray[0]) * 60 + parseInt(bedtimeArray[1]);
  const wakeupInMinutes = parseInt(wakeupArray[0]) * 60 + parseInt(wakeupArray[1]);

  const durationInMinutes = wakeupInMinutes >= bedtimeInMinutes
    ? wakeupInMinutes - bedtimeInMinutes
    : 24 * 60 - (bedtimeInMinutes - wakeupInMinutes);

  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  return `${hours}h ${minutes}m`;
};

function Form() {
  const [day, setDay] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [hoursSlept, setHoursSlept] = useState("");
  const [wakeupTime, setWakeupTime] = useState("");
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
  <label>Hora de acostarse:</label>
  <input
    type="time"
    value={hoursSlept}
    onChange={(e) => setHoursSlept(e.target.value)}
  />
</div>
<div className="form-group">
  <label>Hora de levantarse:</label>
  <input
    type="time"
    value={wakeupTime}
    onChange={(e) => setWakeupTime(e.target.value)}
  />
</div>
<div className="form-group">
  <label>Duración del sueño:</label>
  <input
    type="text"
    value={calculateSleepDuration(hoursSlept, wakeupTime)}
    readOnly
  />
</div>

    </div>

    <div className="form-row">
      <div className="form-group">
        <label>Deporte:</label>
        <div>
          <label for="option1">
            <input type="radio" id="option1" name="optionSport" value="option1" />{" "}
            Si
          </label>

          <label for="option2">
            <input type="radio" id="option2" name="optionSport" value="option2" />{" "}
            No
          </label>

        </div>
      </div>

      <div className="form-group">
        <label>Sensación térmica:</label>
        <div>
          <label for="option1">
            <input type="radio" id="option3" name="optionSensation" value="option3" />{" "}
            Fría
          </label>

          <label for="option2">
            <input type="radio" id="option3" name="optionSensation" value="option3" />{" "}
            Cálida
          </label>
        </div>
      </div>
    </div>

    <div className="form-group">
  <label>Observaciones:</label>
  <textarea className="observations"
   
  />
</div>

    
    <button className="save" type="submit">
      Guardar
    </button>
  </form>
</div>
<FormList/>
      <Footer />
    </>
  );
}

export default Form;
