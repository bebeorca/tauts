import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/login.css';

function Confirmation() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <div className="logo">
            <img src="/src/assets/LOGO.png" alt="" />
          </div>
        </div>
        <h1 className="welcome-text">Konfirmasi Email</h1>
        <div className='input-group d-flex flex-column'>
          <small>kode</small>
          <input style={{border:'none', backgroundColor:'white'}} type="text" />
        </div>
        <button type="submit" className="login-button">
          lanjut
        </button>
      </div>
    </div>
  );
};

export default Confirmation;