import "./App.css";
import Text from "./Text";
import PublicationsList from "./components/PublicationsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{Text.ultraRatas}</h1>
      </header>
      <div className="App-body">
        <PublicationsList />
      </div>
    </div>
  );
}

export default App;
