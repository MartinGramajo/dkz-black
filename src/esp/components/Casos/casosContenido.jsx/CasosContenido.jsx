import React from "react";
import LineaNaranja from "../../LineaNaranja";
import "./casosContenido.css";
import { useState } from "react";
import { MenuData } from "./MenuData";
import { BotonesCat } from "./BotonesCat";

const datos = [
  {
    id: 1,
    categorias: "MKT digital",
    titulo: "Monarca",
    subtitulo: "MKT digital",
  },
  {
    id: 2,
    categorias: "Fotografía",
    titulo: "Monarca B",
    subtitulo: "Fotografía",
  },

  {
    id: 3,
    categorias: "Spot Publicitario",
    titulo: "Monarca C",
    subtitulo: "Spot Publicitario",
  },

  {
    id: 4,
    categorias: "Paginas Web",
    titulo: "La estancia",
    subtitulo: "Pagina Web",
  },

  {
    id: 5,
    categorias: "Campaña",
    titulo: "Magno",
    subtitulo: "Campaña",
  },
  {
    id: 6,
    categorias: "Paginas Web",
    titulo: "La estancia",
    subtitulo: "Pagina Web",
  },
];

const allCategories = [
  "Todas",
  ...new Set(datos.map((dato) => dato.categorias)),
];

export default function CasosContenido() {
  const [menuItem, setMenuItem] = useState(datos);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === "Todas") {
      setMenuItem(datos);
      return;
    }
    const filteredData = datos.filter((dato) => dato.categorias === button);
    setMenuItem(filteredData);
  };

  return (
    <div>
      <div className="container">
        <LineaNaranja />
        <h2 className="peso-bold">CASOS DE EXITO! MIRÁ COMO LO HICIMOS</h2>
        <div className="d-flex justify-content-between my-3">
          <BotonesCat button={buttons} filter={filter} />
        </div>
        <div>
          <MenuData menuItem={menuItem} />
        </div>
      </div>
    </div>
  );
}
