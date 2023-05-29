import LineaNaranja from "../LineaNaranja";
import "./novedadesHome.css";

export default function NovedadesHome() {
    return (
        <div className="pb-5">
            <div id="NovedadesHome" className="container padding-titulo">
                <LineaNaranja />
                <h2 className="color-blanco mt-5 peso-bold">NOVEDADES</h2>
                <div className="d-flex py-5">
                    <div className="me-5">
                        <div
                            className="fondo-novedades-home"
                            style={{
                                backgroundImage: `url('https://res.cloudinary.com/dlzcbrqax/image/upload/v1682032498/PAGINA%20NUEVA/cuadrada_ju9xlu.png')`,
                            }}
                        >
                            <h4 className="peso-bold novedades-home-texto px-4 pt-3">
                                Nuevo Director Creativo
                            </h4>
                            <h5 className="peso-regular novedades-home-texto px-4 pb-3 pt-3">
                                Fabricio es realizador AV independiente con
                                grandes proyectos en su espalda...
                            </h5>
                        </div>
                    </div>
                    <div className="">
                        <div
                            className="fondo-novedades-home"
                            style={{
                                backgroundImage: `url('https://res.cloudinary.com/dlzcbrqax/image/upload/v1682032498/PAGINA%20NUEVA/cuadrada_-_copia_iqpilh.png')`,
                            }}
                        >
                            <h4 className="peso-bold novedades-home-texto px-4 pt-3">
                                DKZ se suma al CPA
                            </h4>
                            <h5 className="peso-regular novedades-home-texto px-4 pb-3 pt-3">
                                La familia DKZ está de festejo porque se
                                convirtieron en la primera...
                            </h5>
                        </div>
                    </div>
                    <div className="ms-5">
                        <div
                            className="fondo-novedades-home"
                            style={{
                                backgroundImage: `url('https://res.cloudinary.com/dlzcbrqax/image/upload/v1682032498/PAGINA%20NUEVA/cuadrada_-_copia_4_cjchs7.png')`,
                            }}
                        >
                            <h4 className="peso-bold novedades-home-texto px-4 pt-3">
                                Jurado CPA
                            </h4>
                            <h5 className="peso-regular novedades-home-texto px-4 pb-3 pt-3">
                                Guillermo CEO de DKZ studio fue invitado a
                                participar como jurado del CPA para...
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
