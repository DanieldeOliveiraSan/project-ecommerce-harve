import { Container } from "react-bootstrap";
import { ListaProdutos } from "../componentes/ListaProdutos";

function Produto() {
  return (
    <Container>
      <p>Aqui vai o produto</p>
      <ListaProdutos />
    </Container>
  );
}

export { Produto };
