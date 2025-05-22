import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from '../assets/logo (2).png';
import ReactLogo from '../assets/react.svg';
import { useNavigate } from 'react-router-dom';
import '../style/Landing.css'
import Button from '../components/button';
import ItsTheLink from '../components/itsthelink_prototype';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className='border-wrapper'>

        <div className="headsection">
          <div className='logo'>
            <img src="/logo.svg" alt="logo" className='imglogo' />
            <h1>tauts</h1>
          </div>
          <div className='headbutton'>
            <Button children={'login'} variant={'buttonlogin'} onClick={() => navigate('/login')}/>
            <Button children={'daftar'} variant={'buttondaftar'} onClick={() => navigate('/register')}/>
          </div>
        </div>

        <div className='bodysection'>
          <div className='leftbody'>
            <h1>Akses semua tautan</h1>
            <h1>dengan satu ketukan</h1>
            <Button children={'Buat tauts-mu'} variant={'greenbutton'} onClick={() => navigate('/login')}/>
          </div>

          <div className='rightbody'>
            <div className='profile-box'>
              <div className='profile-img'>
                <h1>u</h1>
              </div>
              <div className='profile-user'>
                <span className='userspan'>user</span>
                <span>Mobile developer | Cloud Engineer</span>
              </div>
            </div>
            <ItsTheLink children={'Personal website'}/>
            <ItsTheLink children={'Github'}/>
            <ItsTheLink children={'Mobile course'}/>
          </div>
        </div>

        <div className='bids-container'>
          <div className='bids'>
            <img src="/icon_github.svg" alt="" />
          </div>
          <div className='bids'>
            <img src="/icon_website.svg" alt="" />
          </div>
          <div className='bids'>
            <img src="/icon_course.svg" alt="" />
          </div>
        </div>

      </div>
    </>
  )
}

export default LandingPage;
