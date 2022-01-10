import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Cita from './components/Cita/Cita';
import PropTypes from 'prop-types';
import './styles.css';
export default function App() {
  //Guardar citas en el localStorage
  let initialValue = JSON.parse(localStorage.getItem('citas'));
  if (!initialValue) {
    initialValue = [];
  }
  // Almacenar State de Citas
  const [citas, setCitas] = useState(initialValue);
  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    if (initialValue) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, initialValue]);
  //Funcion para crear y almacenar las citas
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };
  //Funcion para eliminar cita
  const deleteCita = (id) => {
    const citaDeleted = citas.filter((cita) => cita.id !== id);
    setCitas(citaDeleted);
  };
  //Condicion del titulo
  const titulo = citas.length === 0 ? 'Agregar Citas' : 'Administrar Citas';
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h1>{titulo}</h1>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Form.PropTypes = {
  crearCita: PropTypes.func.isRequired
}