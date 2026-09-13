import { Banner, Container, Content } from "./styles";


export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-vindo(a)!</h1>
      </Banner>
      <Container>
        <Content>
          <div>Carrssoel Categorias</div>
          <div>Carrssoel Produtos</div>
        </Content>
      </Container>
    </main>
  );
}