import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Row from './components/Row/Row';
import { originals,action,romance,horror,comedy,documentries,trending } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Row url={originals} title='Netflix Originals'/>
      <Row url={trending} title='Trending' sizeImageSmall/>
      <Row url={comedy} title='Comedy' sizeImageSmall/>
      <Row url={action} title='Action' sizeImageSmall/>
      <Row url={horror} title='Horror' sizeImageSmall/>
      <Row url={romance} title='Romance' sizeImageSmall/>
      <Row url={documentries} title='Documentries' sizeImageSmall/>


    </div>
  );
}

export default App;
