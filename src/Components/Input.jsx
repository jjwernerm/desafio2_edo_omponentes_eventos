import Form from 'react-bootstrap/Form';

const Input = ({setPassword, setName}) => { 

  return (    
    <Form className="formClass">
      <label className="labelName">Nombre</label>
      <Form.Control type="text" placeholder="Escriba su nombre" onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Contraseña</label>
      <Form.Control type="password" placeholder="Digita la contraseña" onChange={(e) => setPassword(e.target.value)} />      
    </Form>
  );
}

export default Input;