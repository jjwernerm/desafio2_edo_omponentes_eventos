// NOTA: Profesor estaba intentando validar el campo name y por ningún lado me daba, no se como hacer validar cuando el botón está separado del form. Gracias.

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Components/Button'
import Input from './Components/Input'
import React, {useState} from 'react'

const App = () => {  
  
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  let enableButton = false

  if (password === '252525') {
    enableButton = true
  }

  return (
    <Container fluid>
      
      <h1>Desafío 2: Estados de los Componentes y Eventos</h1>

      <div className="containerComp">
        <div className="comp">
          <Input
            name={name}
            setName={setName}
            password={password}
            setPassword={setPassword}
            error={error}
            setError={setError}
          />          

          <br />
          {enableButton ? <Button /> : null}
        </div>
      </div>

    </Container>
  );  
}

export default App;

