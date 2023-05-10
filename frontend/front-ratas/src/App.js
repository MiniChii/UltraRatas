import "./App.css";
import Text from "./Text";
import PublicationsList from "./components/PublicationsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{Text.ultraRatas}</h1>
      </header>
      <body className="App-body">
        <PublicationsList />
      </body>
    </div>
  );
}

export default App;
