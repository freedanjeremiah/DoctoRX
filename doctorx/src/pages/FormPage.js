import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const FormPage = () => {
  const location = useLocation();
  const doctorName = location.state?.doctorName || 'Unknown';

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = { ...formData, doctorName };

    try {
      const response = await fetch('http://localhost:5001/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        alert('Appointment booked successfully!');
        setFormData({
          name: '',
          age: '',
          sex: '',
          date: '',
        });
      } else {
        alert('Failed to book appointment.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while booking the appointment.');
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Form Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input type="number" className="form-control" id="age" value={formData.age} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="sex" className="form-label">Sex</label>
          <select className="form-control" id="sex" value={formData.sex} onChange={handleChange}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input type="date" className="form-control" id="date" value={formData.date} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Book Appointment</button>
      </form>
    </div>
  );
};

export default FormPage;