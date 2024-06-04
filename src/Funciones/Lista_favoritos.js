import React from 'react';

const FavoritesList = ({ favorites }) => {
  return (
    <div className="favorites-list">
      {favorites.map((fact) => (
        <div key={fact.id} className="fact">
          <p>{fact.value}</p>
          <p><strong>Creado el:</strong> {new Date(fact.created_at).toLocaleDateString()}</p>
          {fact.categories.length > 0 && (
            <p><strong>Categorías:</strong> {fact.categories.join(', ')}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;