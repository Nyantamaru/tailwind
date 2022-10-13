import './App.css';
import Employee from './components/Employee';

const App = () => {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <div>
          <Employee />
          <Employee />
          <Employee />
        </div>
      ) : (
        <p>You cannot see the employees </p>
      )}
    </div>
  );
};

export default App;
