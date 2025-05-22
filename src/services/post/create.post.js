import { useState } from "react";

export default function createLink(onSuccess) {
  const [form, setForm] = useState({
    title: "",
    url: "",
  });

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${import.meta.env.VITE_API}/link/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Gagal menambahkan link");
      setForm({ title: "", url: "" });
      onSuccess();
    } catch (err) {
      alert(err.message || "Terjadi kesalahan saat menambahkan link.");
    }
  };
  return { form, handleChange, handleSubmit, setForm };
}
