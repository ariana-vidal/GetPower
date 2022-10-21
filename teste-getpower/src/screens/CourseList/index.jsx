import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Cards from '../../components/cards';
import styles from './styles.module.scss';

export default function Courselist() {
  return (
    <div className={ styles.container }>
      <Sidebar />
      <div className={ styles.div2 }>
        <Header />
        <section className={ styles.message }>
          <h2>Bem-vindo(a), fulano!</h2>
          <p>
            Vamos transformar o negócio de energia juntos?
            <br />
            Veja abaixo a lista de cursos e serviços que oferecemos pra você:
          </p>
        </section>
        <Cards />
      </div>
    </div>
  );
}
