import { useFetch } from "./useFetch";
import "./App.css";

function App() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users/"
  );

  return (
    <>
      <div className="App">
        <h1>Llamado a la API</h1>
        <div className="card">
          <ul>
            {loading && <li>Cargando...</li>}
            {data?.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
