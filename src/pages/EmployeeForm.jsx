function EmployeeForm() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow">
            <div className="card-body">

              <h2 className="text-center mb-4">
                Employee Form
              </h2>

              <form>

                <div className="mb-3">
                  <label className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter employee name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Designation
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter designation"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Location
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter location"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Salary
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter salary"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Submit
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;