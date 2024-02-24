import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import Counter from './components/Counter'

function App() {

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting ="¡Bienvenido a Vino a vinos!" />
    </>
  )
}

export default App
