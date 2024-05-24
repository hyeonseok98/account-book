import styled from "styled-components";
import tosim from "../../assets/꺄항 토심이.gif";
import tosim2 from "../../assets/화이팅 토심이.png";

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 800px;
  height: 180px;
  padding: 20px;
  border-radius: 16px;
  font-size: 1.8rem;
  background-color: #fff;
`;

export default function SpendingGraph() {
  return (
    <Section>
      <img src={tosim} alt="토심이" width="120px" height="120px" />
      <img src={tosim2} alt="토심이2" width="120px" height="120px" />
    </Section>
  );
}