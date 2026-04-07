import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="main-title">TP Hooks Avancés</h1>
      <p className="subtitle">
        Découverte de useReducer, useRef, useEffect et d’un hook personnalisé
      </p>

      <div className="grid">
        <section className="carte">
          <h2>Compteur avec useReducer</h2>
          <Compteur />
        </section>

        <section className="carte">
          <h2>Focus avec useRef</h2>
          <FocusInput />
        </section>

        <section className="carte">
          <h2>Compteur de rendus</h2>
          <CompteurRendu />
        </section>

        <section className="carte">
          <h2>Liste d’articles avec useFetch</h2>
          <ListeArticles />
        </section>

        <section className="carte">
          <h2>Timer avec nettoyage</h2>
          <Timer />
        </section>
      </div>
    </div>
  );
}

export default App;