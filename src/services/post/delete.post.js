export default async function deleteLink(id) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${import.meta.env.VITE_API}/link/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Gagal menghapus tautan");
    }

    return data;
  } catch (err) {
    throw new Error(err.message || "Terjadi kesalahan saat menghapus tautan.");
  }
}