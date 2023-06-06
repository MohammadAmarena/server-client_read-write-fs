import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { IAppContext, IAppProvider, Patient } from './interfaces';

const BACKEND_URL = 'http://localhost:3000/patients';

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [patients, setPatients] = useState<Patient[]>([]);

  const loadData = async () => {
    try {
      const response = await axios.get<Patient[]>(BACKEND_URL);
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const appContextValue: IAppContext = {
    patients,
    setPatients,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};
