import styled from "styled-components";

const ItemWrapper = styled.div`
  flex: 1;
  margin-right: 15px;
`;

const DateSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: #666666;
`;

const Description = styled.span`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export default function SpendingDetail({ itemInfo }) {
  const { date, item, amount, description } = itemInfo;
  return (
    <>
      <ItemWrapper>
        <DateSpan>{date}</DateSpan>
        <Description>{`${item} - ${description}`}</Description>
      </ItemWrapper>
      <span>{`${amount.toLocaleString()} 원`}</span>
    </>
  );
}
