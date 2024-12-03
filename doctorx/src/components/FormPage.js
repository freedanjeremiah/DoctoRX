import React from 'react';

const FormPage = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Form Page</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input type="number" className="form-control" id="age" />
        </div>
        <div className="mb-3">
          <label htmlFor="sex" className="form-label">Sex</label>
          <select className="form-control" id="sex">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input type="date" className="form-control" id="date" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;