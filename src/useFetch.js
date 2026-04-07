import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    setChargement(true);
    setErreur(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données');
        }
        return response.json();
      })
      .then((resultat) => setData(resultat))
      .catch((err) => setErreur(err))
      .finally(() => setChargement(false));
  }, [url]);

  return { data, chargement, erreur };
}

export default useFetch;