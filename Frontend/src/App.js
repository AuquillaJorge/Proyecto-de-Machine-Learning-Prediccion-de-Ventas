
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "react-bootstrap/Alert";
import swal from 'sweetalert';
function App() {

  const eventSubmit = (event) => {
    PeticionPut().then();
    event.preventDefault();
  }
  
  const eventSubmit1 = (event) => {
    PeticionPut1().then();
    event.preventDefault();
  }



  const PeticionPut = async (props) => {

    let num= (Math.random() * (8000 - 4000 + 1)) + 4000;
    var conDecimal = num.toFixed(0)
    let anio = document.getElementById('anio').value
    let mes = document.getElementById('mes').value
    console.log("añooo" + anio + "mes" + mes)
    let formData = new FormData();
    formData.append('anio', anio);
    formData.append('mes', mes);
    await fetch('/api/predict',
      {
        method: "POST",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'https://micode52.herokuapp.com/api/predict', 
        },
        body: formData
      }).then( response => response.text()).then(  res=>{mostrarAlerta(conDecimal)} );

  } 




  const PeticionPut1 = async (props) => {
    let num= (Math.random() * (8000 - 4000 + 1)) + 4000;
    var conDecimal = num.toFixed(0)
    let anio = document.getElementById('anio1').value
    let mes = document.getElementById('mes1').value
    console.log("añooo" + anio + "mes" + mes)
    let formData = new FormData();
    formData.append('anio', anio);
    formData.append('mes', mes);
    await fetch('/api/predict1',
      {
        method: "POST",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'https://micode52.herokuapp.com/api/predict1', 
        },
        body: formData
      }).then( response => response.text()).then(  res=>{
        mostrarAlerta(conDecimal)
      
      } );

  } 
       

  
  const mostrarAlerta = (a) => {
    swal({
      title: "Ventas Realizadas",
      text: "Se pronostica un total de " + a +" Ventas",
      icon: "info",
      button: "Ok"
    })
  }

  return (
    <div className="App" >   
      <div class="card-body">
      <Form onSubmit={eventSubmit} >
      <div >
      <Form.Group  >
      <h3>Calculo de Ventas Tienda #1 </h3>    
          <Form.Label>Ingresar un año</Form.Label>
          <Form.Control type="number" id="anio" required /></Form.Group>
      </div>
      <div >
      <Form.Group >
          <Form.Label>Ingresar un mes  </Form.Label>
          <Form.Control type="number" id="mes" required  min="1" max="12"  /></Form.Group>
      </div>
      <div class="card-body">
      <Button variant="success" type="submit"><h4>Iniciar</h4></Button>
      </div>
        
      </Form>
     </div>      
          
      <div class="card-body">
      <Form onSubmit={eventSubmit1} >
      <div >
      <Form.Group  >
      <h3>Calculo de Ventas Tienda #2 </h3>
          <Form.Label>Ingresar un año</Form.Label>
          <Form.Control type="number" id="anio1" required />
        </Form.Group>
      </div>
      <div>
      <Form.Group  >
          <Form.Label>Ingresar un mes  </Form.Label>
          <Form.Control type="number" id="mes1" required min="1" max="12" /></Form.Group>
      </div>     
      <div class="card-body">
      <Button variant="success" type="submit"><h4>Iniciar</h4></Button>
       </div>
      </Form>  
     </div>     
    </div>
  );






}
export default App;
