import './App.css';
import Mensaje from './Mensaje.js'



  const Description = () => {
    return <p>Esta es la app del curso fullstacj bootcamp</p>
  }
  const App = () => {
    return (
    <div className="App">
      <Mensaje color="red" message="App"/>
      <Mensaje color="green" message="Estamos trabajando"/>
      <Mensaje color="grey" message="en un curso"/>
      <Mensaje color="yellow" message="de React"/>
      <Description />
    </div>
  )
}

export default App;
