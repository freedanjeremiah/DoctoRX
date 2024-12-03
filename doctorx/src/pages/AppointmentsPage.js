import React, { useState, useEffect } from 'react';

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/appointments');
      if (!response.ok) {
        throw new Error('Failed to fetch appointments');
      }
      const data = await response.json();
      setAppointments(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) return <div className="text-center mt-5">Loading appointments...</div>;
  if (error) return <div className="text-center mt-5 text-danger">Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Appointments List</h1>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Patient Name</th>
              <th>Doctor Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Appointment Date</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">No appointments found</td>
              </tr>
            ) : (
              appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.name}</td>
                  <td>{appointment.doctorName}</td>
                  <td>{appointment.age}</td>
                  <td>{appointment.sex}</td>
                  <td>{formatDate(appointment.date)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsPage;