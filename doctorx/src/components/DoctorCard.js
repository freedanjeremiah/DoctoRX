import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{doctor.name}</h5>
        <p className="card-text"><strong>Specialization:</strong> {doctor.specialization}</p>
        <p className="card-text"><strong>Experience:</strong> {doctor.experience} years</p>
        <p className="card-text"><strong>Fees Per Consultation:</strong> {doctor.fees}</p>
        <p className="card-text"><strong>Timings:</strong> {doctor.timings}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
