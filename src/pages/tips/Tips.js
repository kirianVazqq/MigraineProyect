import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Imgtext from "../../components/imgText/Imgtext.js";
import "./Tips.css";

function Tips() {
  return (
    <div className="info">
      <Navbar />
      {
        <>
          <Imgtext
            imageSrc="/images/imagenInfoAncha.jpg"
            imageAlt="Que esla migraña"
            h1text="Consejos para controlar las migrañas"
            text="¿Qué puedes hacer para que la migraña afecte lo menos posible a tu vida?
              Tomar las medidas necesarias te permitirá evitar la aparición de desencadenantes
              de ataques de migraña, como el estrés o determinados malos hábitos."
          />
          <div className="Tips-Container">
            <div className="tip">
              <div className="tip-img">
                <img
                  src="images/controla-el-estres.jpg"
                  alt="Planificación"
                ></img>
              </div>
              <div className="tip-text">
                <h1>Planificación</h1>
                <p>
                  Un poco de estrés en el trabajo puede ser fuente de
                  motivación. Pero no lo olvidemos: el estrés crónico y mal
                  controlado, puede afectar negativamente a tu salud y aumentar
                  el riesgo de sufrir ataques de migraña.
                </p>
                <li>
                  Si te sientes bajo presión, sal a dar un paseo. Un poco de
                  aire fresco te puede ayudar a retomar tu actividad con más
                  energía.
                </li>
                <li>
                  Utiliza técnicas de meditación que te ayuden a controlar el
                  estrés; respirar profundamente relajará tu sistema nervioso y
                  te ayudará a evaluar la situación que te inquieta desde otra
                  perspectiva.
                </li>
              </div>
            </div>
            <div className="tip">
              <div className="tip-text">
                <h1>Hidratación</h1>
                <p>
                  La deshidratación puede ser un disparador de migrañas. Por
                  tanto, es fundamental mantenerse hidratado para prevenir los
                  ataques.
                </p>
                <li>
                  Si notas que tienes la boca seca, es posible que ya estés
                  deshidratado. No esperes a tener sed para beber agua.
                </li>
                <li>
                  Lleva siempre contigo una botella de agua. Mantente hidratado
                  bebiendo pequeños sorbos a lo largo del día,
                  independientemente de si tienes sed o no.
                </li>
              </div>
              <div className="tip-img">
                <img
                  src="images/mesa_ordenador_limpia_ordenada-scaled.jpeg"
                  alt="Hidratación"
                ></img>
              </div>
            </div>
            <div className="tip">
              <div className="tip-img">
                <img
                  src="images/come-saludable-fuera-zona-trabajo.jpg"
                  alt="Alimentación"
                ></img>
              </div>
              <div className="tip-text">
                <h1>Alimentación</h1>
                <p>
                  Mantener una dieta equilibrada puede ayudarte a controlar tus
                  migrañas. Algunos alimentos, como los que contienen glutamato
                  monosódico o los alimentos procesados, pueden desencadenar
                  ataques de migraña.
                </p>
                <li>
                  Si tienes hambre, no te saltes las comidas. Comer regularmente
                  puede ayudarte a mantener estables los niveles de azúcar en
                  sangre y a evitar la migraña.
                </li>
                <li>
                  Si notas que ciertos alimentos desencadenan tus migrañas,
                  intenta eliminarlos de tu dieta y observa si tus síntomas
                  mejoran.
                </li>
              </div>
            </div>
            <div className="tip">
              <div className="tip-text">
                <h1>Descanso</h1>
                <p>
                  Dormir bien es esencial para mantener a raya las migrañas. La
                  falta de sueño puede aumentar el riesgo de sufrir un ataque de
                  migraña.
                </p>
                <li>
                  Si te sientes cansado, intenta echar una siesta. Asegúrate de
                  que tu entorno es propicio para el descanso: oscurece la
                  habitación, reduce el ruido y asegúrate de que la temperatura
                  es la adecuada.
                </li>
                <li>
                  Establece una rutina de sueño. Intenta acostarte y levantarte
                  a la misma hora todos los días para ayudar a regular tu reloj
                  interno y mejorar la calidad de tu sueño.
                </li>
              </div>

              <div className="tip-img">
                <img
                  src="images/mujeres_reunion_trabajo-scaled.jpeg"
                  alt="Descanso"
                ></img>
              </div>
            </div>
            <div className="tip">
              <div className="tip-img">
                <img
                  src="images/planifica-tus-tareas.jpg"
                  alt="Ejercicio"
                ></img>
              </div>
              <div className="tip-text">
                <h1>Ejercicio</h1>
                <p>
                  El ejercicio regular puede ayudarte a controlar tus migrañas.
                  La actividad física libera endorfinas, que actúan como
                  analgésicos naturales
                </p>
                <li>
                  Si te sientes tenso, realiza un poco de ejercicio. Un paseo
                  rápido o una sesión de yoga pueden ayudarte a liberar la
                  tensión y a reducir la probabilidad de sufrir un ataque de
                  migraña.
                </li>
                <li>
                  Incorpora el ejercicio a tu rutina diaria. Intenta realizar al
                  menos 30 minutos de actividad física moderada la mayoría de
                  los días de la semana.
                </li>
              </div>
            </div>
          </div>
        </>
      }
      <Footer />
    </div>
  );
}

export default Tips;
