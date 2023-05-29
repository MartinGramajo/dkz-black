import { Col, Form, Row, Button, Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useState } from "react";
// import Swal from "sweetalert2";
import { useRef } from "react";

export default function FormEmail() {
  const [validated, setValidated] = useState(false);
  const form = useRef();

  /*funcion para mandar msj al gmail*/
  const sendEmail = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === true) {
      e.stopPropagation();
      emailjs
        .sendForm(
          "service_qc194s8",
          "template_0gbl738",
          e.target,
          "L12Si_lC5MeuIxkSS"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      // Swal.fire({
      //   icon: "success",
      //   title: "Mensaje enviado con éxito",
      //   showConfirmButton: false,
      //   timer: 2000,
      // });
      form.reset();
      setValidated(false); //
    } else {
      setValidated(true);
      // Swal.fire({
      //   icon: "error",
      //   title: "No se pudo enviar el mensaje",
      // });
    }
  };

  return (
    <div className="container">
      <Form ref={form} noValidate validated={validated} onSubmit={sendEmail}>
        <Row className="py-4">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Control
              as="textarea"
              className="input-style-idea"
              type="text"
              required
              name="idea"
              placeholder="Cuéntanos cual es tu idea"
            />
            <Form.Control.Feedback
              className="peso-bold tamaño-mas-chico"
              type="invalid"
            >
              Ingrese su idea de proyecto por favor.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <h4 className="py-4">¿Cómo nos conociste?</h4>
        <Container className="py-4">
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <div className="check-row">
                <Form.Check inline label="Recomendación" name="recomendacion" />
                <Form.Check inline label="Google" name="google" />
              </div>
            </Form.Group>
            <Form.Group as={Col} md="8" controlId="validationCustom03">
              <div className="check-row">
                <Form.Check inline label="Redes Sociales" name="redes" />
                <Form.Check inline label="Otros" name="otros" />
              </div>
            </Form.Group>
          </Row>
        </Container>
        <h4 className="py-4">¿Cómo te contactamos?</h4>
        <div className="py-4">
          <Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Control
                className="input-style"
                type="text"
                required
                name="name"
                placeholder="Nombre completo"
              />
              <Form.Control.Feedback
                className="peso-bold tamaño-mas-chico"
                type="invalid"
              >
                Ingrese su nombre completo por favor.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Control
                className="input-style"
                type="email"
                required
                name="email"
                placeholder="Email"
              />
              <Form.Control.Feedback
                className="peso-bold tamaño-mas-chico"
                type="invalid"
              >
                Ingrese su email por favor.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Control
                className="input-style"
                type="text"
                required
                name="empresa"
                placeholder="Empresa"
              />
              <Form.Control.Feedback
                className="peso-bold tamaño-mas-chico"
                type="invalid"
              >
                Ingrese la empresa por favor.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Control
                className="input-style"
                type="number"
                required
                name="cel"
                placeholder="Teléfono"
              />
              <Form.Control.Feedback
                className="peso-bold tamaño-mas-chico"
                type="invalid"
              >
                Ingrese su teléfono por favor.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </div>
        <div className="d-flex justify-content-center  align-items-center my-5 ">
          <Button
            className="boton-formulario border-0 "
            type="submit"
            value="Send"
          >
            <span className="peso-bold h5"> Enviar</span>
          </Button>
        </div>
      </Form>
    </div>
  );
}
