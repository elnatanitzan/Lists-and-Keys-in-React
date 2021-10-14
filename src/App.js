import './App.scss';

const App = () => {
  const users = [
    {id: 1, name: 'Avraham'},
    {id: 2, name: 'Elnatan'},
    {id: 3, name: 'Avraham'}
  ];

  return (
    <div>
      <h2>Lists & Keys: </h2>
      <ul>
        {users.map((user) => (
            <li key={user.id}>Name: {user.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default App;
