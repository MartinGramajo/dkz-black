import React from "react";
import LineaNaranjaCelu from "../../LineaNaranjaCelu";
import BotonContactanos from "../../BotonContactanos";
import { Button, Card, Image } from "react-bootstrap";
import "./investigacionContenido.css";
export default function InvestigacionContenido() {
    return (
        <div className="color-negro-fondo">
            <div className="container padding-titulo">
                <LineaNaranjaCelu />
                <div className="">
                    <h1 className="peso-bold mb-4">
                        ESTUDIO E INVESTIGACIÓN DE MERCADO
                    </h1>
                    <h4 className="pt-5 pb-5 mb-3 peso-bold">
                        Enfocamos este servicio en la capacidad de nuestros
                        profesionales para establecer estrategias que consoliden
                        nuevas oportunidades de negocio. 
                    </h4>
                </div>
                <div className="d-flex mb-5">
                    <Card className="carta-negra-servicios me-4 p-5">
                        <Card.Body className="d-flex align-items-center">
                            <Card.Text className="peso-regular">
                                <h5>
                                    Buscamos sobre todo, minimizar riesgos,
                                    comprender a los clientes, entender y
                                    enfrentar a la competencia. Por medio de
                                    diferentes estrategias, medimos reputaciones
                                    y capacidades y mejoramos la comunicación en
                                    todo aspecto.
                                </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Image
                        className="w-50 ps-4"
                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683681699/PAGINA%20NUEVA/investiga_e0djq3.png"
                        alt="Imagen investigacion mercado"
                        fluid
                    />
                </div>
                <h2 className="peso-bold color-naranja pt-4">Etapas</h2>

                <div className="pt-5 pb-5">
                    <div className="posicion-boton">
                        <Button className="boton-proceso-investigacion color-negro-investigacion me-5 ">
                            <h5 className="ps-5 peso-bold">
                                <spam className="me-3">•</spam>
                                <spam className="color-naranja me-2 me-2">
                                    1.
                                </spam>
                                Definición del problema, los objetivos y las
                                oportunidades
                            </h5>
                            <h3 className="mx-2 text-white-50 pe-5">↓</h3>
                        </Button>
                    </div>
                    <div className="posicion-boton">
                        <Button className="boton-proceso-investigacion color-gris-investigacion me-5 ">
                            <h5 className="ps-5 peso-bold">
                                <spam className="me-3">•</spam>
                                <spam className="color-naranja me-2">2.</spam>
                                Diseño de la investigación
                            </h5>
                            <h3 className="mx-2 text-white-50 pe-5">↓</h3>
                        </Button>
                    </div>
                    <div className="posicion-boton">
                        <Button className="boton-proceso-investigacion color-negro-investigacion me-5 ">
                            <h5 className="ps-5 peso-bold">
                                <spam className="me-3">•</spam>
                                <spam className="color-naranja me-2">3.</spam>
                                Obtención de información y datos
                            </h5>
                            <h3 className="mx-2 text-white-50 pe-5">↓</h3>
                        </Button>
                    </div>
                    <div className="posicion-boton">
                        <Button className="boton-proceso-investigacion color-gris-investigacion me-5 ">
                            <h5 className="ps-5 peso-bold">
                                <spam className="me-3">•</spam>
                                <spam className="color-naranja me-2">4.</spam>
                                Tratamiento y análisis de los datos
                            </h5>
                            <h3 className="mx-2 text-white-50 pe-5">↓</h3>
                        </Button>
                    </div>
                    <div className="posicion-boton">
                        <Button className="boton-proceso-investigacion color-negro-investigacion me-5 ">
                            <h5 className="ps-5 peso-bold">
                                <spam className="me-3">•</spam>
                                <spam className="color-naranja me-2">5.</spam>
                                Interpretación y presentación de los resultados
                            </h5>
                            <h3 className="mx-2 text-white-50 pe-5">↓</h3>
                        </Button>
                    </div>
                    <div className="posicion-boton">
                        <Button className="boton-proceso-investigacion color-gris-investigacion me-5 ">
                            <h5 className="ps-5 peso-bold">
                                <spam className="me-3">•</spam>
                                <spam className="color-naranja me-2">6.</spam>
                                Acciones estratégicas basadas en los resultados
                                obtenidos
                            </h5>
                        </Button>
                    </div>
                </div>
                <div className="d-flex justify-content-center py-5 margin-negativo-boton ">
                    <BotonContactanos />
                </div>
            </div>
        </div>
    );
}
