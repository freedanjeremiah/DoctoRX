import React from 'react';
import DoctorCard from '../components/DoctorCard';
import { useNavigate } from 'react-router-dom';


const doctors = [
  { name: 'Dr. Mitul Tanvir', specialization: 'Chest', experience: 3, fees: 1500, timings: '10:00 - 20:00' },
  { name: 'Dr. Ovi Sarkar', specialization: 'Brain', experience: 5, fees: 2500, timings: '12:00 - 22:00' },
  { name: 'Dr. Utsho Sharma', specialization: 'Heart', experience: 5, fees: 2000, timings: '14:00 - 20:00' },
  { name: 'Dr. Shuaib Hasan', specialization: 'Eye', experience: 6, fees: 1200, timings: '11:00 - 20:00' },
  { name: 'Dr. Samiul Basir', specialization: 'Skin', experience: 4, fees: 1500, timings: '14:00 - 21:00' },
];

const HomePage = () => {
    const navigate = useNavigate();
  
    return (
      <div className="container mt-4">
        <h1 className="mb-4 text-center">Home Page</h1>
        <div className="row g-4">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4"
              onClick={() => navigate('/form', { state: { doctorName: doctor.name } })} // Pass doctor name
            >
              <DoctorCard doctor={doctor} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default HomePage;
