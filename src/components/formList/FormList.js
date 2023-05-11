import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';
import RegisterService from "../../services/FormList.service";
// import "./FormList.css";

function FormList() {
  const [registers, setRegisters] = useState([]);
  const refForm = useRef();

  const getAllRegisters = () => {
    RegisterService.getAllInfo()
      .then((items) => {
        let allRegisters = [];
        items.forEach(item => {
          const key = item.key;
          const data = item.val();
          allRegisters.push({
            key: key,
            day: data.day,
            bedtime: data.bedtime,
            wakeupTime: data.wakeupTime,
            sleepDuration: data.sleepDuration,
            sport: data.sport,
            thermalSensation: data.thermalSensation,
            observations: data.observations,
          });
        });
        setRegisters([...allRegisters]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const removeRegister = (key) => {
    RegisterService.removeInfo(key).then((res) => {
      getAllRegisters();
    });
  }

  const addRegister = (e) => {
    e.preventDefault();
    // Aquí se agregarán los campos del formulario como variables

    RegisterService.addInfo(/* Aquí se pasarán los campos del formulario como argumentos */).then((res) => {
      refForm.current.reset();
      setRegisters(oldValues => [...oldValues, { key: res.key, /* Aquí se agregarán los campos del formulario como propiedades */ }])
    })
  }

  useEffect(() => {
    getAllRegisters();
  }, []);

  return (
    <>
      <div className="register-list-main-container">
        <div className="register-form-container">
          <form id="register-form" onSubmit={addRegister} ref={refForm}>
            {/* Aquí se agregarán los campos del formulario */}
            <input className="rounded-input" type="submit" value="Guardar"/>
          </form>
        </div>

        <div className="register-list">
          {registers.map(r =>
            <div className="register-item" key={r.key}>
              {/* Aquí se mostrarán los campos del registro */}
              <FaRegTrashAlt className="delete-register" onClick={() => removeRegister(r.key)}/>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FormList;
