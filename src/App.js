import "./App.sass";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Main from "./Components/Main";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import Header from "./Components/Header";
import Cart from "./Components/Cart.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={("/", "/main")}>
          <Main />
        </Route>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
