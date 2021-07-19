import './style/App.css';
import Navbar from "./Components/NavBar/Navbar";
import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App" style={{width:"970px", marginLeft: "auto", marginRight:"auto"}}>
      <div className="navigation-wrapper">
        <Navbar/>
      <CartWidget/>
      </div>
      <ItemListContainer saludo="Bienvenidos!!!!"/>
    </div>
  );
}

export default App;
