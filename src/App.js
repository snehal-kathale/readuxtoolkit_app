import "./App.css";

import Counter from "./feature/counter/counter";
import Value from "./feature/counter/value/value";

function App() {
  return (
    <div className="App">
      <Value />
      <Counter />
    </div>
  );
}

export default App;
