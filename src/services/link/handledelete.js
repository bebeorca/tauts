import deleteLink from "../post/delete.post";

export default async function handleUpdate(id, setLinks) {
  const confirmDelete = window.confirm("Yakin ingin menghapus tautan ini?");
  if (!confirmDelete) return;

  try {
    setLinks((prev) => prev.filter((link) => link.id !== id));
    await deleteLink(id);
  } catch (err) {
    alert(err.message);
  }
}
