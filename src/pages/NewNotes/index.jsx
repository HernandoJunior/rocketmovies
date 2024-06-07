import { Container, Form } from './style'

import { Link } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'


export function NewNotes(){
  return(
    <Container>
      <Header/>

      <main>
        <Form>
            <Link to="/" className='linkVoltar'>
            <FiArrowLeft/> 
              Voltar
            </Link>
          <header>
            <h1>Novo Filme</h1>
          </header>

          <div className="titulo">
            <Input placeholder="Titulo"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>

          <TextArea placeholder="Observações"/>

          <Section title="Marcadores">
            <div className='tags'>
              <NoteItem value= "React"/>
              <NoteItem value="" isNew placeholder="Novo marcador" />
            </div>
          </Section>
          <div className='titulo'>
            <Button title="Excluir filme" id="deleteFilm"/>
            <Button title="Salvar"/>
          </div>
        </Form>
      </main>
    </Container>
  )
}