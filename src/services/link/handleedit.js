import getLink from "../post/onelink.post";
import deleteLink from "../post/delete.post";

export default async function handleEdit(id, setLinks, setForm) {
  try {
    const link = await getLink(id);
    setForm({
      title: link.title || "",
      url: link.url || "",
    });
    await deleteLink(id);
    setLinks((prev) => prev.filter((item) => item.id !== id));
  } catch (err) {
    alert("Gagal mengambil data link untuk diedit.");
    console.error(err);
  }
}
