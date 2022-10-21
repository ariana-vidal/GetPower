import React from 'react';
import Forms from '../../components/Forms';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import styles from './styles.module.scss';

export default function Register() {
  return (
    <div className={ styles.container }>
      <Sidebar />
      <div className={ styles.div2 }>
        <Header />
        <Forms />
      </div>
    </div>
  );
}
