"use client";

import { ReactNode, createContext, useState, FormEvent } from "react";

interface AppContextValue {
  handleDay: (day: string) => void;
  handleMonth: (month: string) => void;
  handleYear: (year: string) => void;
  calcAge: (event: FormEvent<HTMLFormElement>) => void;
  livedYears: number;
  livedMonths: number;
  livedDays: number;
  submited: boolean;
  futureDate: boolean;
  invalidMonth: boolean;
  invalidDay: boolean;
}

export const AppContext = createContext<AppContextValue>({
  handleDay: () => {},
  handleMonth: () => {},
  handleYear: () => {},
  calcAge: () => {},
  livedYears: 0,
  livedMonths: 0,
  livedDays: 0,
  submited: false,
  futureDate: false,
  invalidMonth: false,
  invalidDay: false,
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const [livedDays, setLivedDays] = useState(0);
  const [livedMonths, setLivedMonths] = useState(0);
  const [livedYears, setLivedYears] = useState(0);
  const [submited, setSubmited] = useState(false);
  const [futureDate, setFutureDate] = useState(false);
  const [invalidMonth, setInvalidMonth] = useState(false);
  const [invalidDay, setInvalidDay] = useState(false);

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

    const userBirthDay = parseInt(birthDay);
    const userBirthMonth = parseInt(birthMonth);
    const userBirthYear = parseInt(birthYear);

    setInvalidMonth(false)
    setInvalidDay(false)

    if (
      userBirthYear > currentYear ||
      (userBirthYear === currentYear && userBirthMonth > currentMonth) ||
      (userBirthYear === currentYear &&
        userBirthMonth === currentMonth &&
        userBirthDay > currentDay)
    ) {
      setFutureDate(true);
      setSubmited(false);
      return;
    }

    if (userBirthMonth > 12) {
      setInvalidMonth(true);
      setSubmited(false);
      return;
    }

    if (
      (userBirthMonth === 1 ||
        userBirthMonth === 3 ||
        userBirthMonth === 5 ||
        userBirthMonth === 7 ||
        userBirthMonth === 8 ||
        userBirthMonth === 10 ||
        userBirthMonth === 12) &&
      userBirthDay > 31
    ) {
      setInvalidDay(true);
      setSubmited(false);
      return;
    }
    
    if (
      (userBirthMonth === 4 ||
        userBirthMonth === 6 ||
        userBirthMonth === 9 ||
        userBirthMonth === 11) &&
      userBirthDay > 30
    ) {
      setInvalidDay(true);
      setSubmited(false);
      return;
    }
    
    if (
      userBirthMonth === 2 &&
      ((userBirthYear % 4 === 0 && userBirthDay > 29) ||
        (userBirthYear % 4 !== 0 && userBirthDay > 28))
    ) {
      setInvalidDay(true);
      setSubmited(false);
      return;
    }

    let age = currentYear - userBirthYear;    
    let months = currentMonth - userBirthMonth;
    let days = currentDay - userBirthDay;

    if (
      currentMonth < userBirthMonth ||
      (currentMonth === userBirthMonth && currentDay < userBirthDay) ||
      months < 0
    ) {
      age--;
      if (age < 0) {
        age = 0;
      }
      months += 12;
    }

    if (days < 0) {
      months--;
      const lastDayOfPreviousMonth = new Date(
        currentYear,
        currentMonth - 1,
        0
      ).getDate();
      days += lastDayOfPreviousMonth;
    }

    setLivedYears(age);
    setLivedMonths(months);
    setLivedDays(days);
    setSubmited(true);
    setFutureDate(false);
    setInvalidMonth(false);
    setInvalidDay(false);
  }

  return (
    <AppContext.Provider
      value={{
        handleDay,
        handleMonth,
        handleYear,
        calcAge,
        livedYears,
        livedMonths,
        livedDays,
        submited,
        futureDate,
        invalidMonth,
        invalidDay,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
