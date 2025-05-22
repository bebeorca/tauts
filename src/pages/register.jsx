import { useNavigate } from 'react-router-dom';
import '../style/login.css';
import Input from '../components/input'
import Button from '../components/button';
import useRegisterForm from '../services/auth/register.auth';

function Register() {
  const navigate = useNavigate();
  const { form, handleChange, handleSubmit } = useRegisterForm(() => navigate('/login'));

  return (
    <div className='authcontainer'>
      <div className='logo'>
        <img src="/logo.svg" alt="logo" className='imglogo' />
        <h1>tauts</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='mid-section'>
          <h1>Registrasi akun</h1>
          <Input placeholder={'email'} type={'email'} value={form.email} onChange={handleChange('email')} />
          <Input placeholder={'name'} type={'text'} value={form.name} onChange={handleChange('name')} />
          <Input placeholder={'password'} type={'password'} value={form.password} onChange={handleChange('password')} />
          <Input placeholder={'konfirmasi password'} type={'password'} value={form.confirmPassword} onChange={handleChange('confirmPassword')} />
        </div>
        <div className='mid-section'>
          <Button type="submit" children={'Daftar'} variant={'greenbutton-daftar'} />
        </div>
      </form>
    </div>
  );
}

export default Register;
