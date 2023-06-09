import React, { useState } from 'react';
import './App.css';
import InputMask from 'react-input-mask';

function App() {
  const [form, setForm] = useState("");

  function handleChange(event) {
    console.log("event1", event.target.name);
    console.log("event2", event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("form", form);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if ((!form.altura && !form.peso) || !form.peso || !form.altura) {
      alert("Os valores não podem ser inválidos ou incompletos. Digite o valor corretamente!");
    } else {
      const imc = form.peso / (form.altura * form.altura);
      console.log("IMC:", imc);
      alert('O seu IMC é ' + imc);
    }
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <div className='form'>
          <div className='container-input-label'>
            <div className='children-container-input-label'>
              <label>Quanto você mede?</label>
              <InputMask placeholder='Digite a sua Altura' mask="9.99" onChange={handleChange} name="altura" />
            </div>
            <div className='children-container-input-label'>
              <label>Quanto você pesa?</label>
              <InputMask placeholder='Digite o seu Peso' onChange={handleChange} name="peso" />
            </div>
          </div>
          <div className='container-button'>
            <button>CALCULAR</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default App;
