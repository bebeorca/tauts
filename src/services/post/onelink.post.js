async function getLink(id) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${import.meta.env.VITE_API}/link/one/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch link");
  }
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Gagal mengambil data link");
  }

  return data;
}

export default getLink;
