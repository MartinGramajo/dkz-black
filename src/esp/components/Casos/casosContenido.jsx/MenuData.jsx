import React from "react";

export const MenuData = ({ menuItem }) => {
  return (
    <div className="d-flex justify-content-between flex-wrap mt-5">
      {menuItem.map((dato) => (
        <div className="fondo-naranja-casos mb-5" key={dato.id}>
          <div
            className="fondo-casos"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dlzcbrqax/image/upload/v1682032498/PAGINA%20NUEVA/cuadrada_-_copia_3_wijegz.png')`,
            }}
          >
            <h4 className="peso-bold casos-texto px-4 pt-3">{dato.titulo}</h4>
            <h5 className="peso-regular casos-texto px-4 pb-3 pt-3">
              {dato.categorias}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};
