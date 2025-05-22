async function getOwnLinks(id) {
  const res = await fetch(`${import.meta.env.VITE_API}/link/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch links from user");
  }
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Gagal mengambil data link");
  }

  return data;
}

export default getOwnLinks;
