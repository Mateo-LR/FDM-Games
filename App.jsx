import './styles/App.css'
import Home from './componentes/Home'
import Catalogo from './componentes/Catalogo'
import Biblioteca from './componentes/Biblioteca'
import Nav from './componentes/Nav'
import Footer from './componentes/Footer'
import {Route, Switch} from "wouter"


function App() {
  return (
   <>
    <Nav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/catalogo" component={Catalogo} />
        <Route path="/biblioteca" component={Biblioteca} />
      </Switch>
    <Footer />
   </>
   
  )
}

export default App
