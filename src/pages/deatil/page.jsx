import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Input } from "../../components/Commons/Input";

export default function DetailPage({ spendingLists, setSpendingsLists }) {
  const navigate = useNavigate();

  const paymentDateRef = useRef(null);
  const itemCategoryRef = useRef(null);
  const expenseAmountRef = useRef(null);
  const expenseDetailRef = useRef(null);
  const currentURL = new URL(window.location.href);
  const currentId = currentURL.pathname.split("/").pop();

  const filteredList = spendingLists.filter((spendingList) => {
    return spendingList.id === currentId;
  });

  useEffect(() => {
    filteredList.forEach((detailItem) => {
      paymentDateRef.current.value = detailItem.date;
      itemCategoryRef.current.value = detailItem.item;
      expenseAmountRef.current.value = detailItem.amount;
      expenseDetailRef.current.value = detailItem.description;
    });
  });

  const handleUpdateSpending = (e) => {
    e.preventDefault();
    const date = paymentDateRef.current.value;
    const item = itemCategoryRef.current.value.trim();
    const amount = expenseAmountRef.current.value.trim();
    const description = expenseDetailRef.current.value.trim();
    
    const numberReg = /^[0-9]+$/;
    if (!numberReg.test(amount)) {
      alert("금액은 숫자만 입력해주세요");
      expenseAmountRef.current.focus();
      return;
    }

    const findEqualIdList = spendingLists.map((spendingList) => {
      if (spendingList.id === currentId) {
        return {
          ...spendingList,
          date: date,
          item: item,
          amount: amount,
          description: description,
        };
      }
      return spendingList;
    });

    setSpendingsLists(findEqualIdList);
    navigate("/");
  };

  const handleDeleteSpendingList = () => {
    const confirmDelete = window.confirm(
      "정말로 이 지출 항목을 삭제하시겠습니까?"
    );
    if (!confirmDelete) return;

    const filteredSpendingList = spendingLists.filter(
      (spendingList) => currentId != spendingList.id
    );
    setSpendingsLists(filteredSpendingList);

    navigate("/");
  };

  const handleGoBackPage = () => {
    navigate("/");
  };

  return (
    <Section>
      <Form>
        <Input
          label="날짜"
          type="date"
          placeholder="YYYY-MM-DD"
          ref={paymentDateRef}
          width="100%"
        />
        <Input
          label="항목"
          type="text"
          placeholder="지출 항목"
          ref={itemCategoryRef}
          width="100%"
        />
        <Input
          label="금액"
          type="number"
          placeholder="지출 금액"
          ref={expenseAmountRef}
          width="100%"
        />
        <Input
          label="내용"
          type="text"
          placeholder="지출 내용"
          ref={expenseDetailRef}
          width="100%"
        />
        <div>
          <Button
            $backgroundColor="#007bff"
            onClick={handleUpdateSpending}
            type="button"
          >
            수정
          </Button>
          <Button
            $backgroundColor="#ff4d4d"
            onClick={handleDeleteSpendingList}
            type="button"
          >
            삭제
          </Button>
          <Button
            $backgroundColor="#6c757d"
            onClick={handleGoBackPage}
            type="button"
          >
            뒤로 가기
          </Button>
        </div>
      </Form>
    </Section>
  );
}

const Section = styled.section`
  width: 800px;
  border-radius: 16px;
  padding: 20px;
  background-color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

const Button = styled.button`
  padding: 8px 20px;
  margin-top: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1.4rem;
  filter: brightness(1);
  background-color: ${(props) => props.$backgroundColor || "#007bff"};
  transition: filter 0.2s ease-in-out 0s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;
