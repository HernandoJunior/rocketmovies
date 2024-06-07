import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_FILMS};
  
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  > h1 {
      font-family: 'Roboto slab';
      font-size: 24px;
      font-weight: bold;
    }
`;