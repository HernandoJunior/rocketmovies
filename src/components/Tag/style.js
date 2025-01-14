import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  font-weight: 500;

  padding: 5px 14px;
  margin-right: 6px;
  
  border-radius: 5px;

  color: ${({ theme }) => theme.COLORS.WHITE };
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800 };
`