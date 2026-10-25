import { useEffect, useState } from "react";

function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">
        Employee Dashboard
      </h1>

      <div className="card shadow">
        <div className="card-body">
          <h4 className="mb-3">Employee List</h4>

          <table className="table table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;