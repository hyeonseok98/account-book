import { createContext, useMemo, useState } from "react";
import dummyData from "../data/dummyData.json";

export const SpendingContext = createContext(null);

export const SpendingProvider = ({ children }) => {
  const [spendingLists, setSpendingsLists] = useState(dummyData || []);

  const value = useMemo(
    () => ({ spendingLists, setSpendingsLists }),
    [spendingLists]
  );

  return (
    <SpendingContext.Provider value={value}>
      {children}
    </SpendingContext.Provider>
  );
};
