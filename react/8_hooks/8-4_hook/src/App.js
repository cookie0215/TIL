import './App.css';
import UseReducer from './components/UseReducer';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';

function App() {
  return (
    <div className="App">
      <UseReducer></UseReducer>
      <UseMemo></UseMemo>
      <UseRef></UseRef>
    </div>
  );
}

export default App;
