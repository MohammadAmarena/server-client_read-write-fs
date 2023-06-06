export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  hairLossStage: string;
  beforeImage: string;
  afterImage: string;
  comments: string;
  password: string;
  registerCode: string;
}

export interface IAppContext {
  patients: Patient[];
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>;
}

export interface IAppProvider {
  children: React.ReactNode;
}