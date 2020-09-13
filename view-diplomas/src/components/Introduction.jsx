import React from "react";
import '../assets/styles/introduction.css';

const urlProfile = "https://res.cloudinary.com/duo6yoqmy/image/upload/c_scale,w_80/v1599967553/profile_difxb3.jpg";

function Introduction() {
  return (
    <>
      <article className="container position-relative bg-light rounded pl-3 pr-3 text-center">
        <img
          src={urlProfile}
          alt="photoProfile"
          className="rounded-circle position-absolute left top"
        ></img>
        <div className="mt-5 pt-5 pb-4">
          <h2 className="text-center mt-3">Gary Barzola Pesantes</h2>
          <p className="pl-3 pr-4">
            Estudiante de Ingeniería en Ciencias Computacionales, con
            conocimientos en varios frameworks y herramientas de desarrollo, me
            gusta el trabajo colaborativo y la buena organización en la
            asignación de tareas específicas, en la actualidad me gusta
            aprovechar mi tiempo libre en extender mis conocimientos en areas
            relacionadas con la tecnología.
          </p>
          <p>Ecuador, Guayaquil</p>
        </div>
      </article>
    </>
  );
}

export default Introduction;