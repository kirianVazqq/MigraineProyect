import "./Infoicon.css";
const Infoicon = () => {
  return (
    <div className="div-infoicon">
      <div className="form-icon">
        <img src="images/formicon.png" alt=" icono formulario" />
        <p>
          Es importante saber cuales son los desencadenantes de una la migraña,
          por ello, haz uso de este formulario para llevar el control.
        </p>
        <a href="/form">Entrar al formulario</a>
      </div>

      <div className="information-icon">
        <img src="images/informationicon.png" alt=" icono informacion" />
        <p>
          {" "}
          Las migrañas son uno de los trastornos más comunes del sistema
          nervioso. En ocasiones, el dolor puede llegar a ser incapacitante.
          Conoce aquí mas informacion.
        </p>
        <a href="/info">Saber más</a>
      </div>
    </div>
  );
};

export default Infoicon;
