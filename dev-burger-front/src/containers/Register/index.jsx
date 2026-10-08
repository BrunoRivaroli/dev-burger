import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/Logo.svg'
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
    name: yup
      .string()
      .required('Campo Obrigatório.'),
    email: yup
      .string()
      .email('E-mail Inválido.')
      .required('Campo Obrigatório.'),
    password: yup
      .string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres.')
      .required('Campo Obrigatório.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais.')
      .required('Campo Obrigatório.'),
  })
  .required();

export function Register() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {

    try {
      const { status } =
        await api.post('/users',
          {
            name: data.name,
            email: data.email,
            password: data.password
          },
          {
            validateStatus: () => true
          },
        );

      if (status === 201 || status === 200) {
        setTimeout(() => {
          navigate('/login');
        }, 100);
        toast.success('Cadastro realizado com sucesso!');
      } else if (status === 409) {
        toast.error('E-mail já cadastrado. Faça Login para continuar.');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Ocorreu um erro ao realizar o cadastro.');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={logo} alt="Logo-DevBurger" />
      </LeftContainer>
      <RightContainer>
        <Title> Crie sua Conta </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Name</label>
            <input type="text" placeholder="Digite seu nome" {...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputContainer>
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
          <InputContainer>
            <label>Confirmar Senha</label>
            <input type="password" placeholder="Confirme sua senha" {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>
        <p>Já possui uma conta? <Link to='/login'>Clique aqui.</Link></p>
      </RightContainer>
    </Container>
  );
}
