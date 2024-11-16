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
      </div>{' '}
      <div>
        {' '}
        {users?.data.map((user) => (
          <div key={user?.id}>
            <h3>{user?.first_name}</h3>
          </div>
        ))}
      </div>
      <pre> {JSON.stringify(users, null, 2)} </pre>
    </Layout>
  );
}

export default App;
