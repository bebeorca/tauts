import getUserProfile from "../services/auth/profile.auth";
import { useState, useEffect } from 'react'
import Input from '../components/input';
import Button from '../components/button'
import ItsTheLinkOnUser from "../components/itsthelink_onuser";
import '../style/Dashboard.css'
import truncateUrl from '../services/post/truncate.post'
import createLink from "../services/post/create.post";
import fetchProfileAndLinks from '../services/user/profileandlinks';
import handleDeleteLink from '../services/link/handledelete';
import handleUpdateLink from '../services/link/handleedit';
import CopyButton from "../components/script";

function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [links, setLinks] = useState([]);
  const [prefixn, setPrefixn] = useState('');
  const [error, setError] = useState('');

  const { form, handleChange, handleSubmit, setForm } = createLink(() => {
    fetchProfileAndLinks(setProfile, setPrefixn, setLinks, setError);
  });

  useEffect(() => {
    fetchProfileAndLinks(setProfile, setPrefixn, setLinks, setError);
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!profile) return <p>Loading profile...</p>;

  console.log(profile)

  return (
    <div className='dashcontainer'>
      <div className="leftdashcontainer">
        <div className="flex2">
          <div className="profilecontainer">
            <div className="profilepic">
              <p>{prefixn}</p>
            </div>
            <h1>{profile.name}</h1>
          </div>
          <CopyButton name={profile.name} />
        </div>
        <h3>Tambah tautan</h3>
        <form className="formcontainer" onSubmit={handleSubmit}>
          <Input type={'text'} placeholder={'Judul'} value={form.title} onChange={handleChange('title')} />
          <Input type={'text'} placeholder={'Tautan'} value={form.url} onChange={handleChange('url')} />
          <Button children={'tambah link'} onClick={''} variant={'greenbutton-daftar'} />
        </form>

      </div>
      <div className="dashseparatorcontainer">
        <div className="dashseparator">
        </div>
      </div>

      <div className="previewcontainer">
        {links.map((link) => (
          <div className="flex">
            <button onClick={() => handleDeleteLink(link.id, setLinks)} className="deletebutton">
              <img src="/delete.svg" alt="delete" />
            </button>
            <button onClick={() => handleUpdateLink(link.id, setLinks, setForm)} className="editbutton">
              <img src="/edit.svg" alt="delete" />
            </button>
            <ItsTheLinkOnUser title={link.title} url={link.url} id={link.id} key={link.id} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Dashboard;