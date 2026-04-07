import { useRef, useEffect } from 'react';

function CompteurRendu() {
  const compteur = useRef(0);

  useEffect(() => {
    compteur.current += 1;
    console.log(`Le composant a été affiché ${compteur.current} fois.`);
  });

  return (
    <div className="info-box">
      Ce composant compte ses rendus. Ouvre la console du navigateur pour voir
      le résultat.
    </div>
  );
}

export default CompteurRendu;