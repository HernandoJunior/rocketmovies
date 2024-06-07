import { Container, Profile, Logout } from "./style";
import { RxExit } from "react-icons/rx";
import { Input } from '../Input'

export function Header(){
  return (
    <Container>
      <Logout>
        <h1>RocketMovies</h1>
      </Logout>

      <div className="inputHeader">
        <Input 
          placeholder="Pesquisar pelo titulo"
          type="text"
          name="search"
          id="search"
          />

      </div>
      
      <Profile to="/profile">
        <img src="https://github.com/hernandojunior.png"    alt="Imagem de perfil de Hernando"/>
        <div>
          <strong>Hernando Junior</strong>
          <span>sair</span>
        </div>
      </Profile>
    </Container>
  )
}