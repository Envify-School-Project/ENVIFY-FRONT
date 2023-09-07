'use client';
import styles from './login.module.css';
import { BulletBlock } from '@/components/Block/Bullet.block';
import { LoginForm } from '../../components/Form/Login.form';
import { ButtonIcon } from '@/components/Button';
import { BsArrowLeft } from 'react-icons/bs';

export const LoginContainer = () => {
  return (
    <>
      <div className={styles.backPage}>
        <ButtonIcon href={'/'}>
          <BsArrowLeft />
        </ButtonIcon>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.formContainer}>
          <LoginForm />
        </div>
        <div className={styles.blockContainer}>
          <BulletBlock />
        </div>
      </div>
    </>
  );
};
