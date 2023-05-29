import "../../components/FooterReact/footerReact.css";
import React from "react";
import { Image } from "react-bootstrap";
import BtnContact from "../BtnContact";
import logo from "../../assets/img/logo-dkz.png";
import face from "../../assets/img/face.png";
import instagram from "../../assets/img/instagram.png";
import linked from "../../assets/img/linked.png";

export const FooterReact = () => {
  return (
    <div className="mt-auto color-negroclaro-fondo pt-5">
      <div className="container pt-5">
        <hr className="text-white d-sm-none d-block py-4 " />
        <div className="btn-display">
          <div className="d-flex justify-content-center align-items-center">
            <BtnContact />
          </div>
          <div className="text-footer py-2 padding-redes">
            <a
              className="text-decoration-none"
              href="https://www.facebook.com/agenciadkz"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="redes-width"
                src={face}
                fluid
                alt="icono Facebook"
              />
            </a>
            <a
              className="text-decoration-none"
              href="https://www.instagram.com/dkzstudio/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="redes-width"
                src={instagram}
                fluid
                alt="icono Instagram"
              />
            </a>
            <a
              className="text-decoration-none"
              href="https://www.linkedin.com/company/dkzstudio/?originalSubdomain=ar"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="redes-width"
                src={linked}
                fluid
                alt="icono LinkedIn"
              />
            </a>
          </div>
        </div>
        <hr className="text-white d-none d-sm-block" />
        <div className="footer">
          <div className="py-3 text-footer">
            <Image className="" src={logo} fluid alt="equipo" />
          </div>
          <div className="py-3 text-center text-white">
            <p>
              Info@dkzstudio.com <br />
              Juramento 60 - San Miguel de Tucumán <br />
              Tucumán - Argentina
            </p>
          </div>
          <div>
            <p className="text-footer py-3 text-white">
              Copyright © 2022 <br />
              Todos los derechos reservados <br />
              T&Cs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
