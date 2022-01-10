import React from 'react';
import PropTypes from 'prop-types';

export default function Cita({ cita, deleteCita }) {
  const { mascota, propietario, fecha, hora, sintomas } = cita;
  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>{' '}
      </p>
      <p>
        Dueño: <span>{propietario}</span>{' '}
      </p>
      <p>
        Fecha: <span>{fecha}</span>{' '}
      </p>
      <p>
        Hora: <span>{hora}</span>{' '}
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>{' '}
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={() => deleteCita(cita.id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
}

Cita.PropTypes = {
  deleteCita: PropTypes.func.isRequired,
  cita: PropTypes.object.isRequired,
};
