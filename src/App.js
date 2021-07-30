import './App.css';
import FieldContainer from './containers/FieldContainer';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <div className="App">
      <div className="game-container">
          <ControlPanel />
          <FieldContainer />
      </div>
    </div>
  );
}

export default App;
