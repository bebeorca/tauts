import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getUserByName from '../services/link/getlinks'
import ItsTheLinkOnUser from '../components/itsthelink_onuser';

function Links() {
    const { name } = useParams();
    const [profile, setProfile] = useState(null);
    const [links, setLinks] = useState([]);
    const [error, setError] = useState('');
    const [prefixn, setPrefixn] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUserByName(name);
                setProfile(data.user);
                setLinks(data.links);
                setPrefixn(data.user.name[0].toUpperCase());
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUser();
    }, [name]);

    if (error) return <p>Error: {error}</p>;
    if (!profile) return <p>Loading...</p>;

    return (
        <div className='linksview'>
            <div className="profilecontainer">
                <div className="profilepic">
                    <p>{prefixn}</p>
                </div>
                <h1>{profile.name}</h1>
            </div>
            {links.map((link) => (
                <div className="flex1">
                    <ItsTheLinkOnUser title={link.title} url={link.url} id={link.id} key={link.id} preview={0} />
                </div>
            ))}
        </div>
    );
}

export default Links;
