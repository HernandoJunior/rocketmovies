import { Container } from './styled'

export function Film({ title, ...rest}){
  return(
    <Container 
      title = {title}
      {...rest}
      >
    </Container>
  )
}