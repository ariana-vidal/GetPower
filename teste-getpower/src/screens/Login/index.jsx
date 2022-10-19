import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.scss';

export default function Login() {
  return (
    <div className={ styles.container }>
      <Form>
        <img src="https://app.academiadosol.com.br/assets/img/icone.png" alt="logo academia do sol" />
        <h2>
          Bem-vindo(a) a
          {' '}
          <b>Academia do sol</b>
        </h2>
        <h4>
          Antes de começar, você deve estar logado ou criar uma
          {' '}
          <br />
          conta caso ainda não tenha.
        </h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Lembrar-me" />
        </Form.Group>
        <section>
          <span>Esqueceu sua senha?</span>
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </section>
        <span>Não tem conta?</span>
        <spanh>Criar uma agora</spanh>
      </Form>
      <img src="https://img.freepik.com/fotos-gratis/bela-usina-de-energia-alternativa-com-paineis-solares_23-2149192692.jpg?w=740&t=st=1666103326~exp=1666103926~hmac=e14f98d3b4817f2f90f0ebac3ba7a55aa8998e83921dec6d232b3653b499065d" alt="placa de energia solar" />
    </div>
  );
}
