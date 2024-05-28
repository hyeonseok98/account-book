import { createContext, useEffect, useMemo, useState } from "react";

export const SelectedMonthContext = createContext();

export const SelectedMonthProvider = ({ children }) => {
  const [selectedMonth, setSelectedMonth] = useState(
    parseInt(localStorage.getItem("selectedMonth"), 10) ||
      new Date().getMonth() + 1
  );

  const value = useMemo(() => {
    return { selectedMonth, setSelectedMonth };
  }, [selectedMonth]);

  useEffect(() => {
    localStorage.setItem("selectedMonth", selectedMonth);
  }, [selectedMonth]);

  return (
    <SelectedMonthContext.Provider value={value}>
      {children}
    </SelectedMonthContext.Provider>
  );
};
