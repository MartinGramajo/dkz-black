import React from "react";
import LineaNaranja from "../../components/LineaNaranja";
import "../../components/servicios/servicios.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Servicios() {
    return (
        <div className="container padding-titulo">
            <LineaNaranja />
            <div id="Servicios" className="pb-5">
                <h2 className="color-blanco mt-5 peso-bold">SERVICIOS</h2>
                <h3 className="color-naranja mt-2 peso-bold mb-5">
                    Más que para vos, trabajamos con vos.
                </h3>
                <div className="d-flex flex-wrap">
                    <Button as={Link} to="/eventos" className="boton-servicios mb-3 me-3">
                        <h4 className="">Eventos</h4>
                        <h3 className="">➝</h3>
                    </Button>
                    <Button as={Link} to="/socialmedia" className="boton-servicios mb-3 me-3">
                        <h4 className="">Social Media</h4>
                        <h3 className="">➝</h3>
                    </Button>
                    <Button as={Link} to="/sitiosweb" className="boton-servicios mb-3 me-3">
                        <h4 className="">Sitios Web</h4>
                        <h3 className="">➝</h3>
                    </Button>
                    <Button as={Link} to="/audiovisuales" className="boton-servicios mb-3 me-3">
                        <h4 className="">Producción AudioVisual</h4>
                        <h3 className="">➝</h3>
                    </Button>
                    <Button as={Link} to="/coberturas" className="boton-servicios mb-3 me-3">
                        <h4 className="">Cobertura de prensa</h4>
                        <h3 className="">➝</h3>
                    </Button>
                    <Button as={Link} to="/consultoria" className="boton-servicios mb-3 me-3">
                        <h4 className="">Consultoría y asesoramiento</h4>
                        <h3 className="">➝</h3>
                    </Button>
                    <Button as={Link} to="/publicidad" className="boton-servicios mb-3 me-3">
                        <h4 className="">Publicidad tradicional</h4>
                        <h3 className="">➝</h3>
                    </Button>
                    <Button as={Link} to="/investigacion" className="boton-servicios mb-3 me-3">
                        <h4 className="">Investigación de mercado</h4>
                        <h3 className="">➝</h3>
                    </Button>
                    
                </div>
            </div>
        </div>
    );
}
