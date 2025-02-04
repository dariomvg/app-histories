"use client";

import { useHistory } from "@/hooks/useHistory";
import { FormEvent, useState } from "react";
import "@/styles/register.css";

export default function Register() {
  const [form, setForm] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { register } = useHistory();

  const submitRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.length < 2 || form.length > 12) {
      setMessage("El mensaje debe ser de 2 a 12 caracteres");
      setTimeout(() => setMessage(""), 5000);
      return;
    }
    register(form);
    setForm("");
  };

  return (
    <section className="page-register">
      <h1 className="title-register">Crea un nombre de usuario</h1>
      <form className="form-register" onSubmit={submitRegister}>
        {message && <p className="message-error">{message}</p>}
        <input
          type="text"
          name="form"
          value={form}
          onChange={(e) => setForm(e.target.value)}
          placeholder="Crea tu nombre de usuario"
          className="input-register"
        />
        <button type="submit" className="button-register">
          Crear
        </button>
      </form>
    </section>
  );
}
