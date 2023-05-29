import React from "react";
import LineaNaranja from "../../LineaNaranja";
import "./novedadesContenido.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NovedadesContenido() {
    return (
        <div>
            <div className="container">
                <LineaNaranja />
                <h2 className="peso-bold mb-5">NOVEDADES</h2>
                <div className="mb-5">
                    <div className="">
                        <Image
                            className=" fondo-novedades mb-4"
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683157665/PAGINA%20NUEVA/Group_97_ielddz.png"
                            alt="imagen novedades"
                            fluid
                        />
                        <div>
                            <div className="d-flex justify-content-between mb-3">
                            <h4 className="peso-bold">Sunt in culpa qui officia  in culpa qui officia</h4>
                            <Link className="text-decoration-none" to="/"><h5 className="color-naranja ">Ver +</h5></Link>
                            </div>
                            <h5 className="peso-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between flex-wrap mt-5">
                    <div className="tamaño-card-novedades my-5">
                        <Image
                            className="fondo-novedades mb-4"
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683157665/PAGINA%20NUEVA/Rectangle_76_jlwvnf.png"
                            alt="imagen novedades"
                            fluid
                        />
                        <div>
                            <div className="d-flex justify-content-between mb-3">
                            <h4 className="peso-bold">Slpa qui officia</h4>
                            <Link className="text-decoration-none" to="/"><h5 className="color-naranja ">Ver +</h5></Link>
                            </div>
                            <h5 className="peso-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                        </div>
                    </div>
                    <div className="tamaño-card-novedades my-5">
                        <Image
                            className="fondo-novedades mb-4"
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683157665/PAGINA%20NUEVA/Rectangle_76_jlwvnf.png"
                            alt="imagen novedades"
                            fluid
                        />
                        <div>
                            <div className="d-flex justify-content-between mb-3">
                            <h4 className="peso-bold">Slpa qui officia</h4>
                            <Link className="text-decoration-none" to="/"><h5 className="color-naranja ">Ver +</h5></Link>
                            </div>
                            <h5 className="peso-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                        </div>
                    </div>
                    
                    <div className="tamaño-card-novedades my-5">
                        <Image
                            className="fondo-novedades mb-4"
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683157665/PAGINA%20NUEVA/Rectangle_76_jlwvnf.png"
                            alt="imagen novedades"
                            fluid
                        />
                        <div>
                            <div className="d-flex justify-content-between mb-3">
                            <h4 className="peso-bold">Slpa qui officia</h4>
                            <Link className="text-decoration-none" to="/"><h5 className="color-naranja ">Ver +</h5></Link>
                            </div>
                            <h5 className="peso-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                        </div>
                    </div>
                    <div className="tamaño-card-novedades my-5">
                        <Image
                            className="fondo-novedades mb-4"
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683157665/PAGINA%20NUEVA/Rectangle_76_jlwvnf.png"
                            alt="imagen novedades"
                            fluid
                        />
                        <div>
                            <div className="d-flex justify-content-between mb-3">
                            <h4 className="peso-bold">Slpa qui officia</h4>
                            <Link className="text-decoration-none" to="/"><h5 className="color-naranja ">Ver +</h5></Link>
                            </div>
                            <h5 className="peso-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
