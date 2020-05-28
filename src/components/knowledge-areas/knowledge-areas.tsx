import React from "react";
import "./knowledge-areas.scss";
import { Text } from "../../containers/Language";
function KnowledgeAreas() {
  return (
    <div className="knowledge-areas">
      <h1>
        <Text tid="knowledgeAreas"></Text>
      </h1>
      <div className="knowledge-section">
        <figure className="section-header">
          <div
            className="section-photo"
            style={{ backgroundImage: "url('/resources/organization.jpg')" }}
          ></div>
          <figcaption>
            Photo by{" "}
            <a href="https://unsplash.com/@austindistel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Austin Distel
            </a>{" "}
            on <a href="https://unsplash.com/">Unsplash</a>
          </figcaption>
        </figure>
        <div className="section-body">
          <h1>
            <Text tid="businessAdministrationTitle"></Text>
          </h1>
          <Text tid="businessAdministrationDescription"></Text>
          <br></br>
          <br></br>
          <Text tid="businessAdminIntro"></Text>
          <ul>
            <li>
              <Text tid="businessItem1Title"></Text>
            </li>
            <Text tid="businessItem1Description"></Text>
            <li>
              <Text tid="businessItem2Title"></Text>
            </li>
            <Text tid="businessItem2Description"></Text>
            <li>
              <Text tid="businessItem3Title"></Text>
            </li>
            <Text tid="businessItem3Description"></Text>
            <li>
              <Text tid="businessItem4Title"></Text>
            </li>
            <Text tid="businessItem4Description"></Text>
            <li>
              <Text tid="businessItem5Title"></Text>
            </li>
            <Text tid="businessItem5Description"></Text>
          </ul>
        </div>
      </div>
      <div className="knowledge-section">
        <figure className="section-header">
          <div
            className="section-photo"
            style={{ backgroundImage: "url('/resources/data-analyst.jpg')" }}
          ></div>
          <figcaption>
            Photo by{" "}
            <a href="https://unsplash.com/@kmuza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Carlos Muza
            </a>{" "}
            on <a href="https://unsplash.com/">Unsplash</a>
          </figcaption>
        </figure>
        <div className="section-body">
          <h1>
            <Text tid="dataAnalystTitle"></Text>
          </h1>
          <Text tid="dataAnalystDescription"></Text>
          <br></br>
          <br></br>
          <Text tid="dataAnalystIntro"></Text>
          <ul>
            <li>
              <Text tid="dataItem1Title"></Text>
            </li>
            <Text tid="dataItem1Description"></Text>
            <li>
              <Text tid="dataItem2Title"></Text>
            </li>
            <Text tid="dataItem2Description"></Text>
            <li>
              <Text tid="dataItem3Title"></Text>
            </li>
            <Text tid="dataItem3Description"></Text>
            <li>
              <Text tid="dataItem4Title"></Text>
            </li>
            <Text tid="dataItem4Description"></Text>
          </ul>
        </div>
      </div>
      <div className="knowledge-section">
        <figure className="section-header">
          <div
            className="section-photo"
            style={{ backgroundImage: "url('/resources/growth.jpg')" }}
          ></div>
          <figcaption>
            Photo by{" "}
            <a href="https://unsplash.com/@campaign_creators?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Campaign Creators
            </a>{" "}
            on <a href="https://unsplash.com/">Unsplash</a>
          </figcaption>
        </figure>
        <div className="section-body">
          <h1>Responsable de Growth</h1>
          Identificar las métricas principales que hacen a la empresa prosperar
          permite trabajar de forma intensiva en lo que importa de verdad. Esto
          implica entender al usuario, al consumidor y elaborar iniciativas
          medibles y replicables para entender el éxito o el fracaso de las
          mismas para profundizar o cambiar el foco. Como responsable de Growth
          es necesario lidiar con gran horizontalidad ya que con frecuencia cada
          acción implica múltiples departamentos; comunicación, publicidad,
          servicio al cliente, ventas, desarrollo de nuevas funcionalidades,
          elaboración de presupuestos y análisis de resultados.
          <br></br>
          <br></br>
          Algunas de las acciones realizadas durante mi experiencia han sido:
          <ul>
            <li>Implantación de NPS</li>A través de un servicio de atención al
            usuario mediante la integración de chats internos, páginas de ayudas
            dinámicas como Intercom, conseguimos aumentar el grado de
            satisfacción del usuario y el cliente. El establecimiento de una
            metodología consistente para obtener feedback del usuario es
            fundamental para la mejora continua del servicio.
            <li>Plan de Trabajo MKT+Ventas</li>
            Introducción del método de trabajo mediante identificación de
            oportunidades de venta Outbound y Inbound, para lo que establecimos
            un flujo de trabajo en el que MKT facilitaba las oportunidades de
            ventas generadas mediante publicidad y tráfico orgánico y el equipo
            comercial estableció unos plazos de trabajo sobre estos leads. Este
            plan de trabajo identifica varias estapas; prospección, nurturing y
            cierre, que permite a los trabajadores especializarse en áreas de
            distinta competencia.
            <li>Optimización en las Operaciones</li>
            La incorporación de nuevos procesos internos permite la reducción de
            los recursos necesarios para dar servicio. En concreto, en
            BuscoExtra, la incorporación de una funcionalidad para la
            confirmación de horas y la disponibilidad del trabajador cedido
            permitía reducir el número de llamadas para garantizar el servicio y
            obtener el total de horas trabajadas de forma considerable.
          </ul>
        </div>
      </div>
      <div className="knowledge-section">
        <figure className="section-header">
          <div
            className="section-photo"
            style={{ backgroundImage: "url('/resources/developer.jpg')" }}
          ></div>
          <figcaption>
            Photo by{" "}
            <a href="https://unsplash.com/@fatosi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Fatos Bytyqi
            </a>{" "}
            on <a href="https://unsplash.com/">Unsplash</a>
          </figcaption>
        </figure>
        <div className="section-body">
          <h1>Programador Fullstack</h1>
          Como emprendedor he tenido que aprender a hacer la cosas por mi mismo
          y como autodidacta siempre me ha apasionado la programación; desde
          Matlab o Python para el scripting de análisis matemáticos o Appscript
          para programar spreadsheets hasta Javascript, Angular, React, Ionic
          para el desarrolloo de aplicaciones multiplataforma frontend, Android
          para aplicaciones nativas o incluso Nodejs, Symphony, Nginx para
          desarrollo de APIRest y configuración de servidores.
          <br></br>
          <br></br>
          Pero sin duda en algunas he tenido la oportunidad de dedicar más
          tiempo:
          <ul>
            <li>Aplicaciones Frontend</li>
            Para el desarrollo de aplicaciones he trabajado principalmente en el
            framework de Angular e Ionic, definiendo arquitecturas y programando
            los componentes.
            <li>Servicios en la Nube</li>
            Para el desrrollo de alguans herramientas he empleado arquitecturas
            distribuidas en microservicios despelgadas en Google Engine, Google
            Functions o incluso servicios propios a través de servidores NodeJS.
            <li>Obtención de Datos</li>
            Para la graficación de datos he programado con librerias propias de
            javascript y python (D3, seaborn, matplotliib). En la obtención de
            Datos he realizado un trabajo intensivo en programación de queries
            en MySQL con post procesados en excel o en scripts python.
          </ul>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeAreas;
