import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useState } from 'react';
import Icon from '../../../shared/Icon/Icon';
import css from './LoginForm.module.css';
import LoginFormSchema from '../../../helpers/Schemas/LoginFormSchema';
import { useModal } from '../../../context';
import RegisterModal from '../../MedicinePage/RegisterModal/RegisterModal';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAPI } from '../../../redux/auth/operations';

const LoginForm = ({ isModal = false }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data, e) => {
    dispatch(loginAPI(data));
    if (isModal) closeModal(e);

    reset();
  };

  const handleRegisterBtn = () => {
    if (isModal) {
      openModal(<RegisterModal />);
    } else {
      navigate('/register');
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
      className={clsx(isModal ? css.formModal : css.form)}
    >
      <div className={css.inputWrapper}>
        <label className={css.labelWrapper}>
          <input
            type="email"
            {...register('email')}
            placeholder="Email address"
            className={clsx(css.input, { [css.inputError]: errors.email })}
          />
          {errors.email && (
            <p className={css.errorMessage}>{errors.email?.message}</p>
          )}
        </label>
        <label className={css.labelWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            placeholder="Password"
            autoComplete="on"
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            className={clsx(css.input, {
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
      <div className={css.btnWrapper}>
        <button type="submit" className={css.btn}>
          Log in
        </button>
        <button
          className={css.btnLogin}
          type="button"
          onClick={handleRegisterBtn}
        >
          Don't have an account?
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
