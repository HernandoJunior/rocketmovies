import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  .tags {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  > main {
    overflow: auto;
  }
`

export const Form = styled.form`
  max-width: 1137px;
  margin: 40px auto;  

  > .linkVoltar{
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }

  > .titulo {
    display: flex;
    gap: 40px;

  > #deleteFilm{
    background-color: #0D0C0F;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  }

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 24px 0;
    
    > h1 {
      font-family: 'Roboto slab', sans-serif;
      font-size: 36px;
    }

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      text-decoration: none;
    }


  }
`