import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators} from 'redux';
import { actionCreators } from "./state/index"

function App() {

  //the useSelector hook replaces the connect function.  It allows React
  //components to read data from the Redux store.
  //useSelector accepts a single function, called a selector function, which
  //takes the entire Redux store state as its argument, reads a value, and
  //returns that result, allowing us to get whatever portion of the store we
  //want.
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
  
  console.log(account)

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
