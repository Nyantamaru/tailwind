import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

const App = () => {
  const [role, setRole] = useState('dev');

  const showEmployees = true;

  return (
    <div className="">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className={'flex flex-wrap justify-center'}>
            <Employee
              name={'Julia'}
              role="Intern"
              img={
                'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            />
            <Employee
              name={'Monica'}
              role={role}
              img={
                'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            />
            <Employee
              name={'Erika'}
              img={
                'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            />
            <Employee
              name={'Julia'}
              role="Intern"
              img={
                'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            />
            <Employee
              name={'Monica'}
              role={role}
              img={
                'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            />
            <Employee
              name={'Erika'}
              img={
                'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            />
          </div>
        </>
      ) : (
        <p>You cannot see the employees </p>
      )}
    </div>
  );
};

export default App;
