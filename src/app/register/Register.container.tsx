'use client';
import styles from './register.module.css';
import { BulletBlock } from '@/components/Block/Bullet.block';
import { RegisterForm } from '../../components/Form/Register.form';
import { Button, ButtonIcon } from '@/components/Button';
import { BsArrowLeft } from 'react-icons/bs';

export const RegisterContainer = () => {
  return (
    <>
      <div className={styles.backPage}>
        <ButtonIcon href={'/'}>
          <BsArrowLeft />
        </ButtonIcon>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.formContainer}>
          <RegisterForm />
        </div>
        <div className={styles.blockContainer}>
          <BulletBlock />
        </div>
      </div>
    </>
  );
};
