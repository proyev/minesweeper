import './App.css';
import Field from './components/Field';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <div className="App">
      <div className="game-container">
          <ControlPanel />
          <Field />
      </div>
    </div>
  );
}

export default App;
