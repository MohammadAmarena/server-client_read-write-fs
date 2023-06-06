import React, { useState, ChangeEvent, FormEvent, useContext } from 'react';
import axios, { AxiosError } from 'axios';
import { AppContext } from '../AppContext';

interface FormData {
  name: string;
  age: string;
  gender: string;
  email: string;
  phone: string;
  hairLossStage: string;
  comments: string;
  password: string;
  registerCode: string;
}

export const RegisterPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    hairLossStage: '',
    comments: '',
    password: '',
    registerCode: '',
  });

  const { patients, setPatients } = useContext(AppContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/patients', formData);
      console.log('Patient created:', response.data);

      // Update the patients state with the new data
      setPatients([...patients, response.data]);

      // Reset the form data
      setFormData({
        name: '',
        age: '',
        gender: '',
        email: '',
        phone: '',
        hairLossStage: '',
        comments: '',
        password: '',
        registerCode: '',
      });
    } catch (error) {
      console.error('Error creating patient:', error);

      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          console.log('Response:', axiosError.response.data);
        }
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const placeholders: { [key in keyof FormData]: string } = {
    name: 'Name (required)',
    age: 'Age (minimum 2)',
    gender: 'Gender (required)',
    email: 'Email (required)',
    phone: 'Phone (+49XXXXXXXXX)',
    hairLossStage: 'Hair Loss Stage (required)',
    comments: 'Comments (optional)',
    password: 'Password (minimum 6 characters)',
    registerCode: 'Register Code',
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([name, value]) => (
          <input
            key={name}
            type="text"
            name={name}
            placeholder={placeholders[name as keyof FormData]}
            value={value}
            onChange={handleChange}
          />
        ))}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
