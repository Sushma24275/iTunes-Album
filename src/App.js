import React from "react";
import Album from "./features/album/Album";
import { Counter } from "./features/counter/Counter";
import Header from "./features/header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Header /> */}
        <Album />
      </header>
    </div>
  );
}

export default App;
