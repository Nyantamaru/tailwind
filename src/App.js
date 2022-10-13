import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

const App = () => {
  const [role, setRole] = useState('dev');

  const showEmployees = true;

  return (
    <div className="bg-cyan-400">
      {showEmployees ? (
        <div>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name={'Julia'} role="Intern" />
          <Employee name={'Monica'} role={role} />
          <Employee name={'Erika'} />
        </div>
      ) : (
        <p>You cannot see the employees </p>
      )}
    </div>
  );
};

export default App;
