import React from "react";
import LineaNaranja from "../LineaNaranja";
import "../audioVisuales/audiovisual.css";
import BotonContactanos from "../BotonContactanos";

export default function AudioVisuales() {
  return (
    <div className="color-negro-fondo">
      <div className="container padding-titulo">
        <LineaNaranja />
        <div className="d-none d-md-block">
          <h1 className="peso-bold">
            PRODUCCIONES <br /> AUDIOVISUALES
          </h1>
          <h5 className="padding-card peso-regular">
            Spots publicitarios; cobertura de eventos y registros
            sociales.Videos corporativos. Infomerciales. Institucionales.
            Books.Producciones especiales.
          </h5>
        </div>
        <div className="d-md-none d-block">
          <h3 className="peso-bold">
            PRODUCCIONES <br /> AUDIOVISUALES
          </h3>
          <h5 className="padding-card">
            Spots publicitarios; cobertura de eventos y registros
            sociales.Videos corporativos. Infomerciales. Institucionales.
            Books.Producciones especiales.
          </h5>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="padding-card-pre">
              <h4 className="peso-bold color-naranja py-2"> CREATIVIDAD</h4>
              <h5 className="peso-regular texto-contenido-card">
                Spots publicitarios, cobertura de eventos yregistros sociales.
                Videos corporativos.Infomerciales. Institucionales.
                Books.Producciones especiales.
              </h5>
            </div>
            <div className="padding-card-pro">
              <h4 className="peso-bold color-naranja py-2"> PRODUCCIÓN</h4>
              <h5 className="peso-regular texto-contenido-card">
                Equipo y personal técnico (diversos formatos según necesidad y
                presupuesto).Dirección; producción; dirección de
                fotografía.Dirección de arte. Realización de decorados.Casting.
                Make up, estilismo, vestuario.
              </h5>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="padding-card-pre">
              <h4 className="peso-bold color-naranja py-2"> PREPRODUCCIÓN</h4>
              <h5 className="peso-regular texto-contenido-card">
                Devolución creativa y presentación preliminar. Relevamiento de
                locaciones.Diseño de producción.
              </h5>
            </div>
            <div className="padding-card-pre">
              <h4 className="peso-bold color-naranja pb-2"> POSTPRODUCCIÓN</h4>
              <h5 className="peso-regular texto-contenido-card">
                Edición. Montaje. Sonido. Etalonaje y corrección de color. Video
                fx. Audio fx.Música y sonido. Corte final y copias para
                cualquier medio.
              </h5>
            </div>
          </div>
        </div>
        <div>
          <h2 className="peso-bold pt-5">CASOS</h2>
          <div>
            <div className="d-flex justify-content-between flex-wrap mt-5 pb-4">
              <div className="fondo-naranja mb-5">
                <div
                  className="fondo-casos"
                  style={{
                    backgroundImage: `url('https://res.cloudinary.com/dlzcbrqax/image/upload/v1682032498/PAGINA%20NUEVA/cuadrada_-_copia_3_wijegz.png')`,
                  }}
                >
                  <h4 className="peso-bold casos-texto px-4 pt-3">
                    Mundo Country
                  </h4>
                  <h5 className="peso-regular casos-texto px-4 pb-3 pt-3">
                    Spot Comercial
                  </h5>
                </div>
              </div>
              <div className="fondo-naranja mb-5">
                <div
                  className="fondo-casos"
                  style={{
                    backgroundImage: `url('https://res.cloudinary.com/dlzcbrqax/image/upload/v1682032498/PAGINA%20NUEVA/cuadrada_-_copia_3_wijegz.png')`,
                  }}
                >
                  <h4 className="peso-bold casos-texto px-4 pt-3">
                    Seba la tarde
                  </h4>
                  <h5 className="peso-regular casos-texto px-4 pb-3 pt-3">
                    Programa TV
                  </h5>
                </div>
              </div>
              <div className="fondo-naranja mb-5">
                <div
                  className="fondo-casos"
                  style={{
                    backgroundImage: `url('https://res.cloudinary.com/dlzcbrqax/image/upload/v1682032498/PAGINA%20NUEVA/cuadrada_-_copia_3_wijegz.png')`,
                  }}
                >
                  <h4 className="peso-bold casos-texto px-4 pt-3">
                    Tucuman Epic
                  </h4>
                  <h5 className="peso-regular casos-texto px-4 pb-3 pt-3">
                    SPOT Comercial
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center py-5 margin-negativo-boton ">
          <BotonContactanos />
        </div>
      </div>
    </div>
  );
}
