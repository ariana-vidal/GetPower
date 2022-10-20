import React from 'react';
import { FaPager } from 'react-icons/fa';
import { AiFillFileZip } from 'react-icons/ai';
import { GoFileSubmodule } from 'react-icons/go';
import { BiChevronDownCircle, BiArchive } from 'react-icons/bi';
import { TbCircleHalf2 } from 'react-icons/tb';
import styles from './styles.module.scss';

export default function Sidebar() {
  return (
    <div className={ styles.container_fluid }>
      <section>
        <section>
          <img className={ styles.logo } src="https://app.academiadosol.com.br/assets/img/icone.png" alt="academia do sol" />
          <span><b>academia do sol</b></span>
        </section>
        <img className={ styles.pessoa } src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcKgg2IREYOyGaz68uruUvCia1txfc3SVksiZUKOe5qlR7-M07vSUdRyfz6-OMreYZuQ&usqp=CAU" alt="logo pessoa" />
        <span>nome</span>
        <span>email</span>
      </section>
      <div>
        <span className={ styles.opacity }>
          <FaPager />
          Página inicial
        </span>
        <span className={ styles.yelow }>CURSOS</span>
        <span>
          <AiFillFileZip />
          Meus cursos
        </span>
        <span>
          <GoFileSubmodule />
          Todos os cursos
        </span>
        <span className={ styles.yelow }>DIMENSIONAMENTO</span>
        <span>
          <BiChevronDownCircle />
          Baixa Tensão
        </span>
        <span>
          <TbCircleHalf2 />
          Média tensão
        </span>
        <span className={ styles.yelow }>CRM</span>
        <span>
          <BiArchive />
          Gerenciar
        </span>
      </div>

    </div>
  );
}
