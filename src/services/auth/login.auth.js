import { useState } from "react";

export default function loginForm(onSuccess) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const validate = () => {
    if (!form.email.includes("@")) return "Email tidak valid";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) return alert(error);

    try {
      const res = await fetch(`${import.meta.env.VITE_API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Gagal login");
      localStorage.setItem('token', data.token);
      alert("Login berhasil");
      onSuccess();
    } catch (e) {
      alert(err.message || "Terjadi kesalahan saat mendaftar.");
    }
  };

  return { form, handleChange, handleSubmit };
}
