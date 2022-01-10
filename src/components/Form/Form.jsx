import React, { Fragment, useState } from 'react';
import { v4 } from 'uuid';
export default function Form({ crearCita }) {
  const initalValue = {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  };
  // Crear State de Citas
  const [cita, setCita] = useState(initalValue);
  // Crear State de Errores
  const [error, setError] = useState(false);

  // Función que se ejecuta cada que el usuario escribe en un input
  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Cuando el usuario presiona agregar cita
  const addCita = (e) => {
    e.preventDefault();
    // Validar que los campos no esten vacios
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      setError(true);
      return;
    }
    // Eliminar el mensaje previo cuando los campos esten llenos
    setError(false);
    //Agregando id a la cita
    cita.id = v4();
    //Crear cita
    crearCita(cita);
    //Reiniciar formulario despues de agreagar una cita
    setCita(initalValue);
  };
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={addCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={handleChange}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
}
