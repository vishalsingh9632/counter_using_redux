import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/actions';

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        Counter Using Redux
        <div className="todo">
          <div className="todo-buttons"
            onClick={() => dispatch(decNumber())}
          >-</div>
          <div className="todo-buttons">{myState}</div>
          <div className="todo-buttons"
            onClick={() => dispatch(incNumber())}
          >+</div>
        </div>
      </header>
    </div>
  );
}

export default App;
