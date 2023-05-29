import React from "react";
import LineaNaranja from "../components/LineaNaranja";
import FormTrabajaConNosotros from "../components/Contactanos/FormTrabajaConNosotros";

export default function TrabajaConNosotros() {
  return (
    <div className="padding-titulo color-negro-fondo ">
      <div className="container ">
        <div>
          <LineaNaranja />
        </div>
        <div>
          <h2 className="peso-bold pb-4">
            Si trabajás en cuentas, planning, digital, sos redactor, director de
            arte, redactor de arte o simplemente creés que tenés que aportar a
            nuestro equipo dejanos tus datos. <br /> Gracias!{" "}
          </h2>
        </div>
        <div>
          <h4 className="peso-bold color-naranja py-2 ">
            Completa con tu información
          </h4>
        </div>
        <div className="py-2">
          <FormTrabajaConNosotros />
        </div>
      </div>
    </div>
  );
}
