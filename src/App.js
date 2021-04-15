import Routes from './routes';
import withAuthentication from './services/Session/withAuthentication';
import './App.css';

function App() {
  return <Routes />;
}

export default withAuthentication(App);
