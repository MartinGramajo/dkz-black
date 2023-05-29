import React from "react";
import { Image } from "react-bootstrap";

import ceo from "../../../assets/img/ceo.png";
import co from "../../../assets/img/nacho.png";
import creactivo from "../../../assets/img/fabri.png";
import LineaNaranja from "../../LineaNaranja";

const miembros = [
  {
    id: 1,
    imagen: ceo,
    titulo: "Guillermo Sojo",
    subtitulo: "CEO",
    descripcion: `+10  `,
    descripcion2: " DISEÑADORES ",
  },
  {
    id: 2,
    imagen: co,
    titulo: "Nacho Pintos",
    subtitulo: "Co-Founder",
    descripcion: `+10 `,
    descripcion2: " FILMMAKERS ",
  },
  {
    id: 3,
    imagen: creactivo,
    titulo: "Fabricio Meriglio",
    subtitulo: "Dir. Creativo",
    descripcion: `+5`,
    descripcion2: " DEVELOPERS ",
  },
  {
    id: 4,
    imagen: ceo,
    titulo: "Laura Chanta",
    subtitulo: "Dir. Comunicación",
    descripcion: `+5 `,
    descripcion2: " COMMUNITY MANAGER ",
  },
];

export default function Cabezas() {
  return (
    <div className="container padding-titulo padding-abajo">
      <div>
        <LineaNaranja />
      </div>
      <div>
        <h2 className="peso-bold"> LAS CABEZAS DEL TEAM</h2>
      </div>
      <div className="row py-4">
        {miembros.map((miembro, i) => (
          <div className="col-6 col-md-6 col-lg-3" key={i}>
            <Image
              className=""
              src={miembro.imagen}
              alt="Guillermo Sojo-CEO"
              fluid
            />
            <div className="py-3">
              <h4 className="peso-bold py-1"> {miembro.titulo}</h4>
              <h4 className="peso-regular py-1"> {miembro.subtitulo}</h4>
            </div>
            <div className="py-3 color-negroclaro-fondo">
              <h4 className="peso-bold ms-2"> {miembro.descripcion}</h4>
              <h4 className="peso-bold ms-2"> {miembro.descripcion2}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
