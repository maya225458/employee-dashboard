import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Employee Dashboard
        </Link>

        <div>
          <Link className="btn btn-light me-2" to="/">
            Home
          </Link>

          <Link className="btn btn-light" to="/employee-form">
            Employee Form
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;