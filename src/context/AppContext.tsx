'use client'

import { ReactNode, createContext, useState } from "react";

interface AppContextValue {
    handleDay: (day: string) => void;
    handleMonth: (month: string) => void;
    handleYear: (year: string) => void;
}

export const AppContext = createContext<AppContextValue>({
    handleDay: () => {},
    handleMonth: () => {},
    handleYear: () => {},
  });

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [birthDay, setBirthDay] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthYear, setBirthYear] = useState('');
    
    const [livedDays, setLivedDays] = useState('');
    const [livedMonths, setLivedMonths] = useState('');
    const [livedYears, setLivedYears] = useState('');

    const handleDay = (day: string) => {
        setBirthDay(day);
      };
      
      const handleMonth = (month: string) => {
        setBirthMonth(month);
      };
      
      const handleYear = (year: string) => {
        setBirthYear(year);
      };

    return(
        <AppContext.Provider value={{ handleDay, handleMonth, handleYear }}>
            {children}
        </AppContext.Provider>
    );
};