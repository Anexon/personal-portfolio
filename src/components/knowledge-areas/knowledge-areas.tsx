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
          <h1>Analista de Datos</h1>
          El estudio del comportamiento de los usuarios, las tendencias de
          consumo y uso a través de los datos generados por las operaciones de
          la empresa es necesario para la interpretación del estado actual de la
          empresa. Trabajar directamente con acceso a la base de datos, formateo
          de los datos y elaboración de informes para el consejo de
          administración ha sido una de las principales tareas que he realizado.
          Obtener métricas relevantes para cada departamento permite afianzar
          los esfuerzos o corregir rápida y eficazmente los recursos que se
          están empleando.
          <br></br>
          <br></br>
          Algunas de los estudios realizados en este área:
          <ul>
            <li>A/B Testing</li>
            La implementación de nuevas herramientas o páginas de captación de
            usuarios se ha realizado a través del análisis sobre grupos de
            control y grupos expuestos al nuevo cambio. Este estudio se ha
            realizado sobre los resultados generados por la actividad de los
            mimos en múltiples plataformas; Stores de Aplicación, Google
            Analytics, base de datos, excel, etc.. Todos los estudios se han
            tenido en cuento los resultados estadísticos y los prácticos
            atendiendo al tamaño de las muestras, p-values y distribuciones de
            media; distinguiendo entre las implicaciones a nivel de costes de
            cada nueva funcionalidad respecto a la mejora que introduce.
            <li>Machine Learning</li>
            Elaboración de un algortimo de selección de candidatos en función de
            la actividad del mismo en la plataforma y otros criteriois como
            resultado de uso; valoración del perfil profesional, distancia al
            puesto de trabajo, evaluzación de la imagen de perfil, evaluación
            del texto de descripción, habilidades, etc..
            <li>Obtención de KPIs</li>
            La obtención y configuración de los KPIs implica una relación
            directa con los departamentos financieros y de dirección, que
            permiten establecer objetivos alcanzables y desafiantes. Los datos
            se obteninen normalmente de múltiples fuentes; Google Analytics,
            tiendas de aplicación, base de datos internas y externas APIs de
            terceros o incluso hojas de excel financieras.
            <li>Tendencias demográficas</li>
            Identificacón de los crecimientos de ventas por área geográfica,
            creación de áreas de trabajo mediante geolocalización para
            automatizar la decisión de dar servicio a un cliente utilizando
            GeoJson y análisis de los costes asociados a las operaciones en
            otras provincias de España.
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
