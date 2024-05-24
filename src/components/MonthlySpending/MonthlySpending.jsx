import { useEffect } from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #fff;
  width: 800px;
  height: 180px;
  border-radius: 16px;
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Button = styled.button`
  width: 104px;
  height: 60px;
  border: none;
  border-radius: 10px;
  color: ${(props) => (props.$active ? "#fff" : "#000")};
  background-color: ${(props) => (props.$active ? "#2ec4b6" : "#f6f7fa")};
  font-size: 1.8rem;
  font-weight: 600;

  &:hover {
    color: #fff;
    background-color: #2ec4b6;
  }
`;

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function MonthlySpending({ selectedMonth, setSelectedMonth }) {
  const handleChangeMonth = (month) => {
    setSelectedMonth(month);
    localStorage.setItem("selectedMonth", month);
  };

  useEffect(() => {
    const storedMonth = localStorage.getItem("selectedMonth");
    if (storedMonth) {
      setSelectedMonth(parseInt(storedMonth));
    }
  });

  return (
    <Section>
      <ButtonWrapper>
        {MONTHS.map((month) => {
          return (
            <Button
              key={month}
              $active={month === selectedMonth}
              onClick={() => handleChangeMonth(month)}
            >
              {month}월
            </Button>
          );
        })}
      </ButtonWrapper>
    </Section>
  );
}
