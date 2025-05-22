export default function ItsTheLinkOnUser({ title, url, preview = 1 }) {
    return (
        <div>
            {preview === 1 ? (
                <a href={url} className="linkonusercontainer">
                    <div className="itsthelinkontheuser">{title}</div>
                    <div className="itsthelinkontheuser">{url}</div>
                </a>
            ) : (
                <a href={url} className="linkonusercontainer">
                    <div className="itsthelinkontheuser">{title}</div>
                </a>
            )}
        </div>
    );


}