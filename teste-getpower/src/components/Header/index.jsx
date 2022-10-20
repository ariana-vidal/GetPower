import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaRegBell } from 'react-icons/fa';
import { BsCaretDownFill } from 'react-icons/bs';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={ styles.header }>
      <BiMenu />
      <section>
        <HiOutlineMail />
        <FaRegBell />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcKgg2IREYOyGaz68uruUvCia1txfc3SVksiZUKOe5qlR7-M07vSUdRyfz6-OMreYZuQ&usqp=CAU" alt="logo pessoa" />
        <span>Oi, fulano</span>
        <BsCaretDownFill />
      </section>
    </header>
  );
}
