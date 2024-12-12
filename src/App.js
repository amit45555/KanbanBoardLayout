import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Board from "./components/Board";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <h1>Kanban Board</h1>
        </header>
        <main>
          <Board />
        </main>
      </div>
    </Provider>
  );
}

export default App;
