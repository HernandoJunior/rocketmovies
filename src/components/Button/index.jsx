import { Container } from "./style";

//Desestruturação do props(propriedades)
//Rest usamos no final
export function Button({ title, loading = false, ...rest }){
  return (
    <Container 
      type="button" 
      disabled = { loading }
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  )
}