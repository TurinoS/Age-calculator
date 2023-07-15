'use client'

import { ReactNode, createContext, useState } from "react";

interface AppContextValue {
    handleDay: (day: number) => void;
    handleMonth: (month: number) => void;
    handleYear: (year: number) => void;
}

export const AppContext = createContext<AppContextValue>({
    handleDay: () => {},
    handleMonth: () => {},
    handleYear: () => {},
  });

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [birthDay, setBirthDay] = useState(0);
    const [birthmonth, setBirthMonth] = useState(0);
    const [birthYear, setBirthYear] = useState(0);
    
    const [livedDays, setLivedDays] = useState(0);
    const [livedMonths, setLivedMonths] = useState(0);
    const [livedYears, setLivedYears] = useState(0);

    const handleDay = (day: number) => {
        setBirthDay(day)
    }

    const handleMonth = (month: number) => {
        setBirthMonth(month)
    }

    const handleYear = (year: number) => {
        setBirthYear(year)
    }

    return(
        <AppContext.Provider value={{ handleDay, handleMonth, handleYear }}>
            {children}
        </AppContext.Provider>
    );
};