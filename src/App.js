import React from "react";
import "./App.css";
import Component_API from "./Components/Component_API";
import ComponentLifeCycle from "./Components/ComponentLifeCycle";
import Lifecycle from './LifeCycle/Lifecycle'
function App() {
  return (
    <div className="App">
      <Component_API></Component_API>
      <br />
      <ComponentLifeCycle></ComponentLifeCycle>
      <br/>
      <Lifecycle></Lifecycle>
    </div>
  );
}

export default App;
