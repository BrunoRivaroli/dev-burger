import { ContainerButton } from './styles';
import cart from '../../assets/cart.svg';

export function CartButton({ ...props }) {
  return (
    <ContainerButton {...props}>
      <img src={cart} alt="Carrinho" />
    </ContainerButton>
  );
}
