import { useNavigate } from 'react-router-dom';
import Input from '../components/input';
import loginForm from '../services/auth/login.auth';
import Button from '../components/button';

function Login() {
  const navigate = useNavigate();
  const { form, handleChange, handleSubmit } = loginForm(() => navigate('/dashboard'));

  return (
    <div className='authcontainer'>
      <div className='logo'>
        <img src="/logo.svg" alt="logo" className='imglogo' />
        <h1>tauts</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='mid-section'>
          <h1>Login kembali</h1>
          <Input placeholder={'email'} type={'email'} value={form.email} onChange={handleChange('email')} />
          <Input placeholder={'password'} type={'password'} value={form.password} onChange={handleChange('password')} />
        </div>
        <div className='mid-section'>
          <Button type="submit" children={'Login'} variant={'greenbutton-daftar'} />
        </div>
      </form>
    </div>
  );
}

export default Login;
