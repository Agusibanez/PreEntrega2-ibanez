import Navbar from "./components/layout/navbar";
import ItemListContainer from "./components/pages/ItemListContainer"
import { CarritoProvider } from './components/common/CarritoContext';

function App() {
  return (  
    <div>
      <CarritoProvider>
        <Navbar />
      </CarritoProvider>
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
}

export default App
