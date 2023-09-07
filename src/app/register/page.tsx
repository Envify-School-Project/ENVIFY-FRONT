import styles from './register.module.css';
import { Features } from '@/components/Form/Features';
import { RegisterForm } from '../../components/Form/Register.form';
import { ButtonIcon } from '@/components/Button';
import { BsArrowLeft } from 'react-icons/bs';

export const Register = () => {
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
          <Features />
        </div>
      </div>
    </>
  );
};
