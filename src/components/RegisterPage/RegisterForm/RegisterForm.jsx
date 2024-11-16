import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useState } from 'react';
import Icon from '../../../shared/Icon/Icon';
import css from './RegisterForm.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import RegisterFormSchema from '../../../helpers/Schemas/RegisterFormSchema';
import { useModal } from '../../../context';
import LoginModal from '../../MedicinePage/LoginModal/LoginModal';

const RegistrationForm = ({ isModal = false }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },
  });

  const onSubmit = (e, data) => {
    console.log(data);
    if (isModal) closeModal(e);

    reset();
  };

  const handleLoginBtn = () => {
    if (isModal) {
      openModal(<LoginModal />);
    } else {
      navigate('/login');
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordFocus = () => {
    setIsPasswordTouched(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordTouched(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={isModal ? css.formModal : css.form}
    >
      <div className={css.inputWrapper}>
        <label
          className={(isModal && css.modalLabelWrapper) || css.labelWrapper}
        >
          <input
            type="text"
            {...register('name')}
            placeholder="User name"
            className={clsx((isModal && css.modalInput) || css.input, {
              [css.inputError]: errors.name,
            })}
          />
          {errors.name && (
            <p className={css.errorMessage}>{errors.name?.message}</p>
          )}
        </label>
        <label
          className={(isModal && css.modalLabelWrapper) || css.labelWrapper}
        >
          <input
            type="email"
            {...register('email')}
            placeholder="Email address"
            className={clsx((isModal && css.modalInput) || css.input, {
              [css.inputError]: errors.email,
            })}
          />
          {errors.email && (
            <p className={css.errorMessage}>{errors.email?.message}</p>
          )}
        </label>
        <label
          className={(isModal && css.modalLabelWrapper) || css.labelWrapper}
        >
          <input
            type="tel"
            pattern="[0-9]*"
            {...register('phone')}
            placeholder="Phone number"
            className={clsx((isModal && css.modalInput) || css.input, {
              [css.inputError]: errors.phone,
            })}
          />
          {errors.phone && (
            <p className={css.errorMessage}>{errors.phone?.message}</p>
          )}
        </label>
        <label
          className={(isModal && css.modalLabelWrapper) || css.labelWrapper}
        >
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            placeholder="Password"
            autoComplete="on"
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            className={clsx((isModal && css.modalInput) || css.input, {
              [css.inputError]: errors.password,
              [css.inputSuccess]: !errors.password && getValues('password'),
            })}
          />
          <button
            className={css.showPasswordBtn}
            type="button"
            onClick={handleClickShowPassword}
          >
            {showPassword ? (
              <Icon className={css.icon} iconId="icon-eye-off" />
            ) : (
              <Icon className={css.icon} iconId="icon-eye" />
            )}
          </button>
          {!errors.password && isPasswordTouched && getValues('password') && (
            <>
              <p className={clsx(css.errorMessage, css.successMessage)}>
                Password is valid!
              </p>
            </>
          )}
          {errors.password && (
            <>
              <p className={css.errorMessage}>{errors.password.message}</p>
            </>
          )}
        </label>
      </div>
      <div className={(isModal && css.modalBtnWrapper) || css.btnWrapper}>
        <button type="submit" className={css.btn}>
          Register
        </button>
        <button type="button" className={css.btnLogin} onClick={handleLoginBtn}>
          Already have an account?
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
