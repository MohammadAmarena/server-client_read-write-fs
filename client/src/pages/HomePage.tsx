import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import '../style/home.scss';

export const HomePage = () => {
  const { patients } = useContext(AppContext);

  return (
    <div className="home">
      {/* Table header */}
      <h2>Patients</h2>
      <table className="patient-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {/* Render each patient */}
          {patients.map((patient) => (
            <tr key={patient.id}>
              {/* Display patient data */}
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.email}</td>
              <td>{patient.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
