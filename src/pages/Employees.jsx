import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';

const Employees = () => {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Emily',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Galatea',
      role: 'Manager',
      img: 'https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Melanie',
      role: 'Software Engineer',
      img: 'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'Scarlet',
      role: 'Senior Intern',
      img: 'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      name: 'Lorelai',
      role: 'Director',
      img: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      name: 'Melody',
      role: 'The Devops girl',
      img: 'https://pbs.twimg.com/media/FPROWRaXwAY10Pn.jpg',
    },
  ]);

  const updateEmployee = (id, newName, newRole) => {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  };

  const newEmployee = (name, role, img) => {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    if (name.length <= 0 && role.length <= 0 && img.length <= 0) {
      console.log('null values on fields: name, role, img');
      return;
    } else {
      setEmployees([...employees, newEmployee]);
    }
  };

  const showEmployees = true;

  return (
    <div className={''}>
      {showEmployees ? (
        <>
          <div className={'flex flex-wrap justify-center'}>
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );

              // console.log(uuidv4());
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees </p>
      )}
    </div>
  );
};

export default Employees;
