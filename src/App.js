import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchProfile} from "./store/user";


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProfile({name: 'test'}))

  },[])

  // const fetchProfile = async()=>{
  //   try {
  //     const resp = await axios.get('http://localhost:8081/profile')
  //     console.log(resp,'qqq')
  //   }catch (e) {
  //     console.log(e,'e')
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
