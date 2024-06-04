import React, { useState } from 'react';
import './App.css';
import Input from './Funciones/input';
import FactList from './Funciones/Lista_fact';
import FavoritesList from './Funciones/Lista_favoritos';
import { searchFacts } from './Funciones/chuck_norris_api';

const App = () => {
  const [query, setQuery] = useState('');
  const [facts, setFacts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);

  const Entrada = (event) => {
    setQuery(event.target.value);
  };

  const Busqueda = async () => {
    if (!query.trim()) {
      alert('Ingresa un término de búsqueda');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const result = await searchFacts(query);
      setFacts(result);
    } catch (error) {
      setError('Error al obtener los datos');
    } finally {
      setLoading(false);
    }
  };

  const Like = (fact) => {
    if (!favorites.some(fav => fav.id === fact.id)) {
      setFavorites([...favorites, fact]);
    } else {
      alert('Este fact ya está en favoritos');
    }
  };

  const VerFavoritos = () => {
    setShowFavorites(true); 
  };

  return (
    <div className="App">
      <h1>Chuck Norris Facts by BocchiFans (Benjamin Ramirez)</h1>
      <img 
        src="https://www.lacuarta.com/resizer/n1ehees-tXIHJEEIjrmFOJdVS0A=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/DEGRZMX6V5FP5FCGKEUQOHEHKA.png" 
        alt="Chuck Norris" 
        className="chuck-norris-imagen"
      />
      <Input
        value={query}
        onChange={Entrada}
        placeholder="Buscar facts"
      />
      <button onClick={Busqueda}>Buscar</button>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <FactList facts={facts} Like={Like} />
      <h2>Facts Favoritos!!</h2>
      {showFavorites && ( 
        <FavoritesList favorites={favorites} />
      )}
      <div>
        <button onClick={VerFavoritos}>Ver mis favoritos</button>
      </div>
    </div>
  );
};

export default App;




