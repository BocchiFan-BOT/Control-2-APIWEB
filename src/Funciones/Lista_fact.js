import React from 'react';

const FactList = ({ facts, Like }) => {
  return (
    <div className="facts-list">
      {facts.map((fact) => (
        <div key={fact.id} className="fact">
          <p>{fact.value}</p>
          <p><strong>Creado el:</strong> {new Date(fact.created_at).toLocaleDateString()}</p>
          {fact.categories.length > 0 && (
            <p><strong>Categorías:</strong> {fact.categories.join(', ')}</p>
          )}
          <button onClick={() => Like(fact)}>Me gusta</button>
        </div>
      ))}
    </div>
  );
};

export default FactList;