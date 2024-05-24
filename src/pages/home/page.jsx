import { useState } from "react";
import styled from "styled-components";
import AddSpending from "../../components/AddSpending";
import MonthlySpending from "../../components/MonthlySpending";
import SpendingGraph from "../../components/SpendingGraph";
import SpendingLists from "../../components/SpendingLists";

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  gap: 20px;
`;

export default function HomePage({ spendingLists, setSpendingsLists }) {
  const [selectedMonth, setSelectedMonth] = useState(5);

  return (
    <Main>
      <AddSpending
        spendingLists={spendingLists}
        setSpendingsLists={setSpendingsLists}
        selectedMonth={selectedMonth}
      />
      <MonthlySpending
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <SpendingGraph />
      <SpendingLists />
    </Main>
  );
}
