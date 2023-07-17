'use client'

import { ReactNode, createContext, useState, FormEvent } from "react";

interface AppContextValue {
    handleDay: (day: string) => void;
    handleMonth: (month: string) => void;
    handleYear: (year: string) => void;
    calcAge: (event: FormEvent<HTMLFormElement>) => void;
}

export const AppContext = createContext<AppContextValue>({
    handleDay: () => {},
    handleMonth: () => {},
    handleYear: () => {},
    calcAge: () => {},
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

    function calcAge(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const currentDate = new Date();
      const currentDay = currentDate.getDate();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();

      const userBirthDay = parseInt(birthDay)
      const userBirthMonth = parseInt(birthMonth)
      const userBirthYear = parseInt(birthYear)
    
      let age = currentYear - userBirthYear;
    
      if (currentMonth < userBirthMonth || (currentMonth === userBirthMonth && currentDay < userBirthDay)) {
        age--;
      }
    
      let months = currentMonth - userBirthMonth;
      let days = currentDay - userBirthDay;
    
      if (days < 0) {
        months--;
        const lastDayOfPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        days += lastDayOfPreviousMonth;
      }
    
      if (months < 0) {
        age--;
        months += 12;
      }
    
      console.log(age, months, days)
    }

    return(
        <AppContext.Provider value={{ handleDay, handleMonth, handleYear, calcAge }}>
            {children}
        </AppContext.Provider>
    );
};