import styled from "styled-components";

export const List =styled.ul`
  padding-left: 0;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 33px;
  gap: 10px;
`;
export const Button = styled.button`
    width: 75px;
    height: 35px;
    background-color: #f2f83a;
    border-radius: 5px;
    &:hover{
    background-color: #ed1c1c;
    }
` 
export const Paragraf = styled.p`
    margin: 0;
`