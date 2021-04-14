import Routes from './routes';
import './App.css';

function App() {
  console.log('TEST::', process.env.REACT_APP_API_KEY);

  return <Routes />;
}

export default App;
