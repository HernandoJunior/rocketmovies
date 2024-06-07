import { Container } from "./style.js"

import { Button } from "../../components/Button/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"
import { Header } from "../../components/Header/index.jsx"
import { Section } from "../../components/Section/index.jsx"

import { Link } from 'react-router-dom'

import { Tag } from "../../components/Tag/index.jsx";

export function MyFilmsDetails(){
  return (
    <Container>
        <Header />
      <main>
        <Link to="/" id="">
          Voltar
        </Link>
        <h1>Interestrellar</h1>

      <Section>
        <Tag title="Ficção cientifica" />
        <Tag title="Drama" />
        <Tag title="Familia" />
      </Section>

      <p></p>
      </main>
    </Container>
  )
}