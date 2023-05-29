import React from "react";
import { Card, Image } from "react-bootstrap";
import LineaNaranja from "../../LineaNaranja";
import BotonContactanos from "../../BotonContactanos";

export default function CoberturasContenido() {
    return (
        <div className="color-negro-fondo">
            <div className="container padding-titulo">
                <LineaNaranja />
                <div className="">
                    <h1 className="peso-bold mb-5 pb-4">
                        COBERTURAS DE PRENSA <br/> Y REDACCIÓN DE NOTICIAS
                    </h1>
                </div>
                <div className="d-flex mb-5 pb-4">
                    <Card className="carta-trans-servicios me-4 py-5">
                        <Card.Body className="d-flex align-items-center">
                            <Card.Text className="peso-bold">
                                <h5>
                                Utilizamos diferentes estrategias con el objetivo de informar, persuadir, promover, formar opiniones, educar y entretener. Ofrecemos contenido original, con valor genuino y relevantes para los diferentes sectores.
                                </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Image
                        className="w-50 ps-4"
                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683593032/PAGINA%20NUEVA/Rectangle_77_hv9qvl.png"
                        alt="Imagen coberturas"
                        fluid
                    />
                </div>
                <h2 className="peso-bold color-naranja mb-5">¿CÓMO LO HACEMOS?</h2>
                <div className="d-flex mb-5">
                <Image
                        className="w-50 pe-4 "
                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683592987/PAGINA%20NUEVA/Rectangle_76_lyvsig.png"
                        alt="Imagen coberturas"
                        fluid
                    />
                    <Card className="carta-naranja-servicios ms-4 p-5">
                        <Card.Body className="d-flex align-items-center">
                            <Card.Text className="peso-regular">
                                <h5>
                                • <spam className="peso-bold">Contamos con un sector de prensa y difusión</spam> encargado de elaborar y comunicar informaciones relacionadas con diferentes actividades periodísticas e institucionales.
                                </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="d-flex mb-5">
                    <Card className="carta-negra-servicios me-4 p-5">
                        <Card.Body className="d-flex align-items-center">
                            <Card.Text className="peso-regular">
                                <h5>
                                    • Realizamos relevamiento en diferentes medios gráficos y audiovisuales, <spam className="peso-bold">contamos con nuestro propio departamento de producción y post producción.</spam>
                                </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Image
                        className="w-50 ps-4"
                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683592986/PAGINA%20NUEVA/Rectangle_78_d9vh7r.png"
                        alt="Imagen coberturas"
                        fluid
                    />
                </div>
                <div className="d-flex mb-5">
                    <Image
                        className="w-50 pe-4 "
                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683592987/PAGINA%20NUEVA/Rectangle_79_kndjhn.png"
                        alt="Imagen coberturas"
                        fluid
                    />
                    <Card className="carta-negra-servicios ms-4 p-5">
                        <Card.Body className="d-flex align-items-center">
                            <Card.Text className="peso-regular">
                                <h5>
                                    • Confeccionamos piezas de comunicación interna con contenidos de carácter institucional.<br/><br/>
                                    • Diseñamos y ejecutamos piezas gráficas de alto impacto con el objetivo de comunicarnos con profesionalismo y eficacia.
                                </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="d-flex justify-content-center py-5 margin-negativo-boton ">
                    <BotonContactanos />
                </div>
            </div>
        </div>
    );
}
