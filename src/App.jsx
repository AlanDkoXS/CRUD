import { useEffect } from 'react';
import useFetch from './hooks/useFetch';
import Layout from './layouts/Layout';
import AddEdit from './components/AddEdit';

const baseUrl = 'https://users-crud-api-8lio.onrender.com/api/v1';
function App() {
  const [users, setUsers] = useFetch();

  useEffect(() => {
    readUsers();
  }, []);

  const createUser = (dataForm) => {
    setUsers({ url: `${baseUrl}/users`, method: 'POST', body: dataForm });
  };

  // READ

  const readUsers = () => {
    setUsers({ url: `${baseUrl}/users` });
  };

  return (
    <Layout>
      <div className="header">
        <div className="header__container">
          <h1 className="header__tittle">Usuarios</h1>
        </div>
        <div className="header__button">
          <button type="button" className="btn">
            Agregar Usuario
          </button>
        </div>
      </div>

      <AddEdit createUser={createUser} />
      <div>
       { loading ? (
        <h2>Cargando...</h2>
    ) : (<>
        {users?.data.map((user) => (
          <div key={user?.id}>
            <h3>{user?.first_name}</h3>
          </div>
        ))}
        </>)}
      </div>
      <pre> {JSON.stringify(users, null, 2)} </pre>
    </Layout>
  );
}

export default App;
