import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import Title from './components/Title';
import ListFilm from './components/ListFilm';
let ricerca1 = 'harry potter'

function App() {
  return (
    <div className="App bg-dark">
      <MyNavBar />
      <Title />

      <ListFilm query="star%20wars" title="Star Wars" />
      <ListFilm query="lord%20of%20the%20rings" title="Il Signore degli Anelli " />
      <ListFilm query="harry%20potter" title="Harry Potter" />
      <MyFooter />
    </div>
  );
}

export default App;
