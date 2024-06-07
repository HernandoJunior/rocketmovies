import styled from 'styled-components'

export const Container = styled.div `
  width: 100%;
  height: 100vh;

  > main {
    border: 1px solid red;
    max-width: 1200px;

    padding: 50px 0 ;
    margin: 0 auto;
  }
  
`

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 10px;
  }

  > li a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-decoration: none;
    font-size: 15px;
  }
`

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`