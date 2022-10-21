import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
// import list from './list';

export default function Cards() {
  return (
  // {list.map((ele) => (
  //   <div key={ele.id}>
  //     <span>{ele.price}</span>
  //     <span>{ele.title}</span>
  //     <p>{ele.descripition}</p>
  //     {/* <img src={ele.image} alt="" /> */}
  //     <button
  //       type="button"
  //     >
  //       Acessar
  //     </button>

  //   </div>

    // ))}
    <>
      <div className={ styles.cards }>
        <section>
          <span>R$:197.00</span>
          <span><b>Contratos</b></span>
          <p>Utilize nossa plataforma de contratos e otimize sua rotina!</p>
          <img src="https://app.academiadosol.com.br/uploads/cursos/9/banner.png" alt="" />
          <button
            type="button"
          >
            Acessar
          </button>

        </section>
        <section>
          <span>R$:347.00</span>
          <span><b>Máquina de vendas</b></span>
          <p>Transforme em uma máquina de vendas o seu negócio.</p>
          <img src="https://app.academiadosol.com.br/uploads/cursos/8/maquina_de_vendas.png" alt="" />
          <button
            type="button"
          >
            Acessar
          </button>

        </section>
        <section>
          <span>R$:997.00</span>
          <span><b>Mestre Fotovoltaico 2.0</b></span>
          <p>Do zero a especialista. Comece a ter resultados em até 45 dias.</p>
          <img src="https://app.academiadosol.com.br/uploads/cursos/3/banner.png" alt="" />
          <button
            type="button"
          >
            Acessar
          </button>

        </section>
      </div>
      <Link
        to="/register"
      >
        <button className={ styles.button } type="button">Cadastrar proposta</button>
      </Link>
      <Link
        to="/"
      >
        <button className={ styles.button } type="button">Sair</button>
      </Link>
    </>
  );
}
