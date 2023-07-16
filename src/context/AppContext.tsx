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

    function calcAge(dayOfBirth, monthOfBirth, yearOfBirth) {
      const currentDate = new Date();
      const currentDay = currentDate.getDate();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();
    
      let age = currentYear - yearOfBirth;
    
      if (currentMonth < monthOfBirth || (currentMonth === monthOfBirth && currentDay < dayOfBirth)) {
        age--;
      }
    
      let months = currentMonth - monthOfBirth;
      let days = currentDay - dayOfBirth;
    
      if (days < 0) {
        months--;
        const lastDayOfPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        days += lastDayOfPreviousMonth;
      }
    
      if (months < 0) {
        age--;
        months += 12;
      }
    
      return {
        years: age,
        months: months,
        days: days
      };
    }
    

    return(
        <AppContext.Provider value={{ handleDay, handleMonth, handleYear }}>
            {children}
        </AppContext.Provider>
    );
};