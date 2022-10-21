import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default function Forms() {
  return (
    <div className={ styles.container }>
      <section className={ styles.section1 }>
        <span>Propostas</span>
        <span>Propostas / Cadastrar</span>
      </section>
      <span>Cadastar Propostas</span>
      <section className={ styles.section2 }>
        <button type="button">Dados Cliente</button>
        <span>Dados de consumo</span>
        <span>Dados Complementares</span>
        <span>Orçamento</span>
        <span>Revisão</span>
      </section>
      <span>Dados do cliente</span>
      <Form className={ styles.form1 }>
        <Row>
          <Col>
            <Form.Label>Nome</Form.Label>
            <Form.Control placeholder="digite seu nome" />
          </Col>
          <Col>
            <Form.Label>CNPJ (opicional)</Form.Label>
            <Form.Control placeholder="digite um cnpj válido" />
          </Col>
        </Row>
      </Form>
      <section className={ styles.section3 }>
        <Form.Select size="lg">
          <option>selecione o Estado</option>
        </Form.Select>
        <Form.Select size="lg">
          <option>Selecione a Cidade</option>
        </Form.Select>
      </section>
      <button className={ styles.button } type="button">Próxima etapa</button>
      <Link
        to="/courselist"
      >
        <button className={ styles.button } type="button">Voltar</button>
      </Link>
    </div>
  );
}
