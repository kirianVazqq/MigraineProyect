import "./Infotypemigrana.css";
const Infotypemigrana = () => {
  return (
    <div>
      <div className="info-migraine">
        <h1>¿Qué es la migraña?</h1>
        <p>
          La migraña o jaqueca es un trastorno neurológico que se caracteriza
          por un intenso o grave dolor de cabeza. Esta enfermedad puede ser
          extremadamente incapacitante para quienes la padecen.
        </p>
        <p>
          ¿Qué es la migraña? La migraña o jaqueca es un trastorno neurológico
          que se caracteriza por un intenso o grave dolor de cabeza. Esta
          enfermedad puede ser extremadamente incapacitante para quienes la
          padecen. El dolor de la migraña puede afectar a la parte frontal o a
          toda la zona del cráneo y suele presentarse en forma de crisis o
          ataques, que pueden ir acompañados de otros síntomas.
        </p>
        <p>
          Las crisis de migraña pueden manifestarse de dos formas distintas:
        </p>
        <div className="migraine-recurrence">
          <div className="type-episodic">
            <img
              src="/images/calendarempty.png"
              alt="Calendario episodico"
            ></img>
            <span>Episódica: </span>
            <p>
              Cuando el dolor aparece hasta 9 días al mes, hablamos de crisis
              episódica poco frecuente o de episódica{" "}
            </p>
          </div>
          <div className="type-chronic">
            <img src="/images/calendar.png" alt="Calendario cronico"></img>
            <span>Crónica: </span>
            <p>Cuando hay 15 o más días de crisis al mes. </p>
          </div>
        </div>
      </div>

      <div className="type-no-aura">
        <h1>Tipos de migraña</h1>
        <p>
          Existen diferentes tipos de migraña, siendo la migraña sin aura la
          forma más común. Este tipo de migraña se caracteriza por un dolor muy
          fuerte que puede interferir con la actividad diaria y presenta los
          siguientes síntomas:
        </p>
        <strong>Migraña sin aura</strong>
        <p>
          Provoca un dolor muy fuerte, por lo que interfiere en la actividad
          habitual, y sus principales síntomas son:
        </p>
        <li>
          Dolor en un lado de la cabeza, aunque en algunos casos puede
          expandirse por toda la cabeza.
        </li>
        <li>
          En algunos casos, el dolor puede ser pulsátil (se sienten los latidos
          del corazón)
        </li>
        <li>
          En menor frecuencia, el dolor puede presentarse en el cuello o en la
          mandíbula.
        </li>
        <li>
          El dolor aparece de forma espontánea y suele durar más de 4 horas y
          menos de 3 días. En niños y adolescentes, los ataques pueden durar
          menos de 4 horas.
        </li>
        <li>
          La actividad física y el movimiento de la cabeza pueden empeorar el
          dolor.
        </li>
        <li>
          La migraña sin aura puede provocar intolerancia a la luz (fotofobia),
          a los sonidos (fonofobia) y a los olores (osmofobia), así como náuseas
          y vómitos.
        </li>
        <span>La migraña sin aura es la forma más frecuente de migraña</span>
      </div>
      <div className="type-aura">
        <strong>Migraña con aura</strong>
        <p>
          Se distingue de la migraña sin aura por la aparición de otros síntomas
          (aura), que pueden afectar a diferentes sentidos: vista, tacto y/o
          lenguaje. Estos síntomas a menudo son previos al dolor y, con menor
          frecuencia, pueden aparecer durante o tras el dolor.
        </p>
        <li>
          Dolor en un lado de la cabeza, aunque en algunos casos puede
          expandirse por toda la cabeza.
        </li>
        <li>
          El dolor puede ser pulsátil (se sienten los latidos del corazón).
        </li>
        <li>El dolor puede presentarse en el cuello o en la mandíbula.</li>
        <li>
          Pueden presentarse síntomas visuales, como destellos de luz, manchas o
          líneas en el campo visual, o problemas de visión.
        </li>
        <li>
          También pueden presentarse síntomas sensoriales, como hormigueo o
          entumecimiento en las manos o la cara.
        </li>
        <li>
          El aura puede durar de 5 a 60 minutos antes de que comience el dolor
          de cabeza.
        </li>
        <li>
          Los síntomas de la migraña con aura pueden incluir intolerancia a la
          luz (fotofobia), a los sonidos (fonofobia) y a los olores (osmofobia),
          así como náuseas y vómitos.
        </li>
      </div>
      <div className="type-menstrual">
        <strong>Migraña menstrual</strong>
        <p>
          Se relaciona con la bajada brusca de los niveles de estrógenos, que
          suele producirse justo antes de la menstruación. Suele iniciarse con
          la primera regla, pero puede mejorar o desaparecer durante el embarazo
          o la menopausia. Sin embargo, los tratamientos hormonales (píldora
          anticonceptiva/sustitutivos hormonales) pueden empeorarla.
        </p>
        <li>
          Dolor de cabeza que comienza antes o durante el período menstrual.
        </li>
        <li>Puede ser un dolor de cabeza con o sin aura.</li>
        <li>
          El dolor puede ser pulsátil y afectar un lado de la cabeza o ambos
          lados.
        </li>
        <li>El dolor puede durar de 4 a 72 horas.</li>
        <li>
          Pueden presentarse síntomas asociados, como náuseas, vómitos,
          sensibilidad a la luz (fotofobia) y sensibilidad al sonido
          (fonofobia).
        </li>
      </div>
      <div className="text-map">
        <h1>
          Mapa Global de Prevalencia de Migrañas: Los Lugares con Mayor
          Incidencia
        </h1>
        <p>
          Este mapa ilustra la prevalencia de migrañas en todo el mundo,
          identificando las áreas con la mayor incidencia de esta afección
          neurológica en base al estudio de 2019 de la universidad de Misko,
          Bielorrusia.
        </p>
      </div>
    </div>
  );
};

export default Infotypemigrana;
