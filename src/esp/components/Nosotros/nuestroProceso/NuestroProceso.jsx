import React from "react";
import "../nuestroProceso/proceso.css";
import LineaNaranja from "../../LineaNaranja";
import { Button, Image } from "react-bootstrap";
import proceso from "../../../assets/img/proceso.png";

export default function NuestroProceso() {
  return (
    <div className="container padding-titulo padding-abajo">
      <div>
        <LineaNaranja />
      </div>
      <div>
        <h2 className="peso-bold"> NUESTRO PROCESO</h2>
      </div>
      <div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 col-xl-8">
            <Image className="" src={proceso} alt="Nuestro Proceso" fluid />
          </div>
          <div className="col-12 col-md-12 col-lg-6  col-xl-4  pt-5">
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
      </div>
    </div>
  );
}
