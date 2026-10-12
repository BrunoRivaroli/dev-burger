import { CategoriesCarousel, OffersCarousel } from '../../components';
import { useUser } from '../../hooks/UserContext';
import { Banner, Container, Content } from './styles';

export function Home() {
  console.log(useUser());
  return (
    <main>
      <Banner>
        <h1>Bem-vindo(a)!</h1>
      </Banner>
      <Container>
        <Content>
          <CategoriesCarousel />
          <OffersCarousel />
        </Content>
      </Container>
    </main>
  );
}
