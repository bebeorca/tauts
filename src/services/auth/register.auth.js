import { useState } from 'react';

export default function registerForm(onSuccess) {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const validate = () => {
    if (!form.email.includes("@")) return "Email tidak valid";
    if (form.password.length < 6) return "Password minimal 6 karakter";
    if (form.password !== form.confirmPassword) return "Password tidak cocok";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) return alert(error);

    try {
      const res = await fetch(`${import.meta.env.VITE_API}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Gagal mendaftar");

      localStorage.setItem("user", JSON.stringify(data.user));
      alert("Pendaftaran berhasil!");
      onSuccess();
    } catch (err) {
      alert(err.message || "Terjadi kesalahan saat mendaftar.");
    }
  };

  return { form, handleChange, handleSubmit };
}
