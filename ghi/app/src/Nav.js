import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white" to="/">
          CarCar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item dropdown px-5">
              <NavLink
                className="nav-link dropdown-toggle text-white"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inventory
              </NavLink>
              <ul className="dropdown-menu opacity-50 ">
                <li>
                  <NavLink className="dropdown-item " to="/manufacturers">
                    Manufacturers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/manufacturers/new">
                    Create a Manufacturer
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/models">
                    Models
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/models/new">
                    Create a Vehicle Model
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/automobiles">
                    Automobiles
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/automobiles/new">
                    Create an Automobile
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown px-5">
              <NavLink
                className="nav-link dropdown-toggle text-white"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Service
              </NavLink>
              <ul className="dropdown-menu opacity-50">
                <li>
                  <NavLink className="dropdown-item" to="/technicians">
                    Technicians
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/technicians/new">
                    Add a Technician
                  </NavLink>
                </li>

                <li>
                  <NavLink className="dropdown-item" to="/appointments">
                    Service Appointments
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/appointments/new">
                    Create an Appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/appointments/history">
                    Service history
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown px-5">
              <NavLink
                className="nav-link dropdown-toggle text-white"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales
              </NavLink>
              <ul className="dropdown-menu opacity-50">
                <li>
                  <NavLink className="dropdown-item" to="/salespeople">
                    Salespeople
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/salespeople/new">
                    Add a Salesperson
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/customers">
                    Customers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/customers/new">
                    Add a Customer
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/sales">
                    Sales
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/sales/new">
                    Add a Sale
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/sales/history">
                    Sales History
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
