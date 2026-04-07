import useFetch from './useFetch';

function ListeArticles() {
  const { data, chargement, erreur } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (chargement) return <p className="loading">Chargement en cours...</p>;
  if (erreur) return <p className="error">Erreur : {erreur.message}</p>;

  return (
    <ul>
      {Array.isArray(data) &&
        data.slice(0, 8).map((article, index) => (
          <li key={article.id}>
            <strong>Article {index + 1}</strong>
            <p>{article.title}</p>
          </li>
        ))}
    </ul>
  );
}

export default ListeArticles;