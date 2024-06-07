import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";



export function Home(){
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />
      
      <Menu>
        <li><ButtonText title='Todos' isactive/></li>
        <li><ButtonText title='React'/></li>
        <li><ButtonText title='Node'/></li>

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{ 
            title: 'ReactJs',
            tags: [
              { id: '1', name: 'React' },
              { id: '2', name: 'NodeJs' },
            ]
          }}/>
        </Section>
      </Content>

      <NewNote to="/newnotes">
        <FiPlus/>
        Criar nota
      </NewNote>

    </Container>

  )
}