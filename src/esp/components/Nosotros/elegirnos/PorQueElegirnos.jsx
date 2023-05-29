import React from "react";
import "../elegirnos/elegirnos.css";
import LineaNaranja from "../../LineaNaranja";

import LineaNaranjaCelu from "../../LineaNaranjaCelu";

import { BeneficiosCel } from "./BeneficiosCel";
import { Beneficios } from "./Beneficios";

export default function PorQueElegirnos() {
  return (
    <div className="color-negroclaro-fondo">
      <div className=" d-lg-block d-none container">
        <LineaNaranja />
        <h2 className="peso-bold">¿Por qué elegirnos?</h2>
        <h5 className="peso-regular py-2">
          Conoce todos los beneficios que DKZ puede ofrecerte
        </h5>
        <div>
          <Beneficios />
        </div>
      </div>
      <div className="container d-block d-lg-none ">
        <div className="px-2">
          <LineaNaranjaCelu />
          <div className="">
            <h2 className="peso-bold fs-32">
              ¿POR QUE <br /> ELEGIRNOS?
            </h2>
            <h5 className="peso-regular fs-16  py-2">
              Conoce todos los beneficios que DKZ puede ofrecerte
            </h5>
          </div>
        </div>
        <BeneficiosCel />
      </div>
    </div>
  );
}
