import React from "react";
import "../carouselHome/carouselHome.css";
import { Card, Image } from "react-bootstrap";
import linea from "../../assets/img/lineagriscard.png";
import icono1 from "../../assets/img/iconocard1.png";
import icono2 from "../../assets/img/iconocard2.png";
import icono3 from "../../assets/img/iconocard3.png";

export default function Cartas() {
  return (
    <div className="padding-titulo padding-abajo container container-md">
      <div className="cartas">
        <Card className="carta-naranja">
          <Card.Body className="d-flex flex-column justify-content-evenly">
            <Card.Title>
              <Image className="" src={icono1} fluid alt="icono okay" />
            </Card.Title>
            <Card.Subtitle className="title-card peso-bold">
              Aumentá tus ventas <br />
              <Image className="" src={linea} fluid alt="linea divisora" />
            </Card.Subtitle>
            <Card.Text className="subtitle-card">
              Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
              en demostraciones
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="carta-negra">
          <Card.Body className="d-flex flex-column justify-content-evenly">
            <Card.Title>
              <Image className="" src={icono2} fluid alt="icono okay" />
            </Card.Title>
            <Card.Subtitle className="title-card peso-bold">
              Crecé exponencialmente <br />
              <Image className="" src={linea} fluid alt="linea divisora" />
            </Card.Subtitle>
            <Card.Text className="subtitle-card">
              Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
              en demostraciones
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="carta-negra">
          <Card.Body className="d-flex flex-column justify-content-evenly">
            <Card.Title>
              <Image className="" src={icono3} fluid alt="icono okay" />
            </Card.Title>
            <Card.Subtitle className="title-card peso-bold">
              Sabemos lo que hacemos <br />
              <Image className="" src={linea} fluid alt="linea divisora" />
            </Card.Subtitle>
            <Card.Text className="subtitle-card">
              Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
              en demostraciones
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
