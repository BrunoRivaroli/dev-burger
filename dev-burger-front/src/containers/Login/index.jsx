import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.svg'
import { api } from '../../services/api';
import { Button } from '../../components/Button'
import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  Link,
  InputContainer
} from './styles'


const schema = yup
  .object({
    email: yup
      .string()
      .email('E-mail Inválido.')
      .required('Campo Obrigatório.'),
    password: yup
      .string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres.')
      .required('Campo Obrigatório.'),
  })
  .required();

export function Login() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    const {
      data: { token },
    } = await toast.promise(
      api.post('/session',
        {
          email: data.email,
          password: data.password
        }),
      {
        pending: 'Verificando credenciais...',
        success: {
          render() {
            setTimeout(() => {
              navigate('/');
            }, 100);
            return 'Login realizado com sucesso!';
          },
        },
        error: 'E-mail ou senha inválidos.',
      },
    );

    localStorage.setItem('token', token);
  };


  return (
    <Container>
      <LeftContainer>
        <img src={logo} alt="Logo-DevBurger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>
        <p>Não possui conta? <Link to='/cadastro'>Clique aqui.</Link></p>
      </RightContainer>
    </Container>
  );
}
