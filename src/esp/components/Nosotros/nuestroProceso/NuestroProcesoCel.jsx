import React from "react";
import LineaNaranjaCelu from "../../LineaNaranjaCelu";
import { Button, Image } from "react-bootstrap";
import procesoCelu from "../../../assets/img/proceso-celu.png";

export const NuestroProcesoCel = () => {
  return (
    <div>
      <div className="container ps-5">
        <LineaNaranjaCelu />
        <h5 className="peso-bold "> NUESTRO PROCESO</h5>
      </div>
      <div className="">
        <Image
          className="w-100"
          src={procesoCelu}
          alt="Nuestro Proceso"
          fluid
        />
      </div>
      <div className="container py-2">
        <div className="posicion-boton">
          <Button className="boton-proceso-a me-5 ">
            <h5 className="ms-3">Análisis del mercado</h5>
            <h3 className="mx-2 text-white-50">↓</h3>
          </Button>
        </div>
        <div className="posicion-boton">
          <Button className="boton-proceso-b me-5 ">
            <h5 className="ms-3">Determinación de objetivos</h5>
            <h3 className="mx-2 text-white-50">↓</h3>
          </Button>
        </div>
        <div className="posicion-boton">
          <Button className="boton-proceso-a me-5 ">
            <h5 className="ms-3">Elaboración de estrategias</h5>
            <h3 className="mx-2 text-white-50">↓</h3>
          </Button>
        </div>
        <div className="posicion-boton">
          <Button className="boton-proceso-b me-5 ">
            <h5 className="ms-3">Plan de acción</h5>
            <h3 className="mx-2 text-white-50">↓</h3>
          </Button>
        </div>
        <div className="posicion-boton">
          <Button className="boton-proceso-a me-5 ">
            <h5 className="ms-3">Establecimiento de presupuesto </h5>
            <h3 className="mx-2 text-white-50">↓</h3>
          </Button>
        </div>
        <div className="posicion-boton">
          <Button className="boton-proceso-b me-5 ">
            <h5 className="ms-3">Métodos de control</h5>
          </Button>
        </div>
      </div>
    </div>
  );
};
