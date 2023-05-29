import React from "react";
import { Card, Image } from "react-bootstrap";
import LineaNaranja from "../../LineaNaranja";
import BotonContactanos from "../../BotonContactanos";

export default function ConsultoriaContenido() {
    return (
        <div className="color-negro-fondo">
            <div className="container padding-titulo">
                <LineaNaranja />
                <div className="">
                    <h1 className="peso-bold">CONSULTORÍA Y ASESORAMIENTO</h1>
                    <h2 className="pt-4 pb-5 mb-5 peso-bold">
                        Legal, financiera, política y publicitaria.
                    </h2>
                    <h5 className="py-4 peso-bold mb-5">
                        Nos enfocamos en el requerimiento del cliente, brindando
                        soluciones alternativas y eficaces, que ayuden a
                        consolidar el esquema de trabajo y los objetivos
                        internos de una compañía
                    </h5>
                </div>
                <div className="d-flex mb-5">
                    <Card className="carta-naranja-servicios me-4 p-5">
                        <Card.Body className="d-flex align-items-center">
                            <Card.Text className="peso-regular">
                                <h5>
                                    • Consultoría y asesoramiento en{" "}
                                    <spam className="peso-bold text-uppercase">
                                        marketing y comercialización
                                    </spam>
                                    : realizamos auditorías de proyectos,
                                    análisis internos y externos, mediciones y
                                    acciones, con el principal objetivo de
                                    lograr definiciones claras para
                                    posicionamientos de marcas.
                                </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="carta-negra-servicios ms-4 p-5">
                        <Card.Body className="d-flex align-items-center">
                            <Card.Text className="peso-regular">
                                <h5>
                                    • Consultoría y asesoramiento{" "}
                                    <spam className="peso-bold text-uppercase ">
                                        económico - financiero
                                    </spam>
                                    : cualificamos y evaluamos las finanzas de
                                    una empresa para luego indicar estratégicas
                                    para hacerlas más rentables y organizadas.
                                </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="d-flex mb-5">
                    <Image
                        className="w-50 pe-4 "
                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683588317/PAGINA%20NUEVA/Rectangle_75_x7sa07.png"
                        alt="Imagen consultoria"
                        fluid
                    />
                    <Card className="carta-negra-servicios ms-4 p-5">
                        <Card.Body className="d-flex align-items-center">
                            <Card.Text className="peso-regular">
                                <h5>
                                    • Consultoría y asesoramiento{" "}
                                    <spam className="peso-bold text-uppercase">
                                        político
                                    </spam>
                                    : nuestra gestión se basa en el concepto de
                                    posicionamiento y visibilidad política, 
                                    ejecutamos campañas electorales,
                                    asesoramientos estratégicos, investigación
                                    de opinión pública, mercado y asuntos
                                    públicos en Argentina y España.
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
                                    • Consultoría y asesoramiento{" "}
                                    <spam className="peso-bold text-uppercase ">
                                        publicitario
                                    </spam>
                                    : nos basamos en costes y montos de
                                    conversión obtenidos en cualquiera de las
                                    estrategias, campañas y planes publicitarios
                                    a ejecutar.
                                </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Image
                        className="w-50 ps-4"
                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683588317/PAGINA%20NUEVA/Rectangle_74_wndbc6.png"
                        alt="Imagen consultoria"
                        fluid
                    />
                </div>
                <div className="d-flex mb-5">
                    <Card className="carta-negra-servicios me-4 p-5">
                        <Card.Body className="d-flex align-items-center">
                            <Card.Text className="peso-regular">
                                <h5>
                                    • Consultoría y asesoramiento en{" "}
                                    <spam className="peso-bold text-uppercase ">
                                        organización y recursos humanos
                                    </spam>
                                    : nuestro servicio se encarga de analizar y
                                    diagnosticar el entorno laboral, nos
                                    orientamos en la prescripción de
                                    modificaciones, ajustes y mejoras para
                                    optimizar tanto el rendimiento del personal
                                    como de la empresa.
                                </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Image
                        className="w-50 ps-4"
                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683588317/PAGINA%20NUEVA/Rectangle_53_nr5eza.png"
                        alt="Imagen consultoria"
                        fluid
                    />
                </div>

                <div className="d-flex justify-content-center py-5 margin-negativo-boton ">
                    <BotonContactanos />
                </div>
            </div>
        </div>
    );
}
