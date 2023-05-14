import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import RegisterService from "../../services/FormList.service";
import "./FormList.css";

function RegistersList() {
  const [register, setRegister] = useState([]);
  const refForm = useRef();

  const getAllRegisters = () => {
    RegisterService.getAllRegisters()
      .then((items) => {
        let allRegisters = [];
        items.forEach((item) => {
          const key = item.key;
          const data = item.val();
          allRegisters.push({
            key: key,
            day: data.day,
            bedtime: data.bedtime,
            wakeupTime: data.wakeupTime,
            sleepDuration: data.sleepDuration,
            sport: data.sport,
            thermanSensation: data.thermanSensation,
            observations: data.observations,
          });
        });
        setRegister([...allRegisters]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const removeRegister = (key) => {
    RegisterService.removeRegister(key).then((res) => {
      getAllRegisters();
    });
  };
  const addRegister = (e) => {
    e.preventDefault();
    const day = e.target.day.value;
    const bedtime = e.target.bedtime.value;
    const wakeupTime = e.target.wakeupTime.value;
    const sport = e.target.sport.value;
    const thermanSensation = e.target.thermanSensation.value;
    const observations = e.target.observations.value;

    const bedtimeDate = new Date(`1970-01-01T${bedtime}:00`);
    const wakeupTimeDate = new Date(`1970-01-01T${wakeupTime}:00`);

    let sleepDurationHours = wakeupTimeDate.getHours() - bedtimeDate.getHours();
    let sleepDurationMinutes =
      wakeupTimeDate.getMinutes() - bedtimeDate.getMinutes();

    if (sleepDurationMinutes < 0) {
      sleepDurationHours--;
      sleepDurationMinutes = 60 + sleepDurationMinutes;
    }

    if (sleepDurationHours < 0) {
      sleepDurationHours = 24 + sleepDurationHours;
    }

    const sleepDuration = `${sleepDurationHours
      .toString()
      .padStart(2, "0")}:${sleepDurationMinutes.toString().padStart(2, "0")}`;

    RegisterService.addRegister(
      day,
      bedtime,
      wakeupTime,
      sleepDuration,
      sport,
      thermanSensation,
      observations
    ).then((res) => {
      refForm.current.reset();
      setRegister((oldValues) => [
        ...oldValues,
        {
          key: res.key,
          day,
          bedtime,
          wakeupTime,
          sleepDuration,
          sport,
          thermanSensation,
          observations,
        },
      ]);
    });
  };

  useEffect(() => {
    getAllRegisters();
  }, []);

  return (
    <>
      <div className="registers-list-main-container">
        <div className="registers-form-container">
          <form id="register-form" onSubmit={addRegister} ref={refForm}>
            <div className="Form">
              <div className="form-group">
                {" "}
                <label>Día</label>
                <input
                  className="rounded-input"
                  type="date"
                  name="day"
                  placeholder="day"
                />
              </div>
              <div className="form-group">
                {" "}
                <label>Hora de acostarse</label>
                <input
                  className="rounded-input"
                  type="time"
                  name="bedtime"
                  placeholder="bedtime"
                />
              </div>
              <div className="form-group">
                <label>Hora de levantarse</label>
                <input
                  className="rounded-input"
                  type="time"
                  name="wakeupTime"
                  placeholder="wakeupTime"
                />
              </div>
              <div className="form-group">
                {" "}
                <label>Duracion del sueño</label>
                <input
                  className="rounded-input"
                  type="time"
                  name="sleepDuration"
                  placeholder="sleepDuration"
                />
              </div>
              <div className="form-group">
                <label>Deporte</label>
                <input
                  className="rounded-input"
                  type="text"
                  name="sport"
                  placeholder="SI O NO"
                />
              </div>
              <div className="form-group">
                {" "}
                <label>Sensanción térmica</label>
                <input
                  className="rounded-input"
                  type="text"
                  name="thermanSensation"
                  placeholder="Frio o Calido"
                />
              </div>
              <div className="form-group">
                <label>Observaciones</label>
                <input
                  className="rounded-input"
                  type="text-area"
                  name="observations"
                  placeholder=""
                />
              </div>

              <input
                className="rounded-input"
                type="submit"
                value="Añadir registro"
              />
            </div>
          </form>
        </div>

        <div className="registers-list">
          {register.map((b) => (
            <div className="register-item" key={b.key}>
              <p>{b.day}</p>
              <p>{b.bedtime} </p>
              <p>{b.wakeupTime}</p>
              <p>{b.sleepDuration}</p>
              <p>{b.sport}</p>
              <p>{b.thermanSensation} </p>
              <p>{b.observations} </p>
              <FaRegTrashAlt
                className="delete-register"
                onClick={() => removeRegister(b.key)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RegistersList;
