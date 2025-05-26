import React from "react";

function CopyButton({ name }) {
  const copyText = () => {
    const text = `${import.meta.env.VITE_URL}/${name}`;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Profil disalin!");
      })
      .catch((err) => {
        console.error("Gagal menyalin: ", err);
      });
  };

  return (
    <button className="buttonshare" onClick={copyText}>
      <img src="/share.svg" alt="" /> bagikan
    </button>
  );
}

export default CopyButton;