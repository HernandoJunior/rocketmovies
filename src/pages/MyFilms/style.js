import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  > .myfilmsDiv{
    max-width: 1200px;
    margin: 50px auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > #addFilm {
      width: 207px;
      height: 50px;
    }

    > p {
      font-size: 32px;
      font-weight: 400;
      font-family: 'Roboto slab';
    }
  }

  > main {
    max-width: 1200px;
    margin: 0 auto;

    > h1 {
      font-family: 'Roboto slab';
      font-size: 24px;
      font-weight: bold;
    }

    > span {
        font-size: 16px;
    }
  }

`