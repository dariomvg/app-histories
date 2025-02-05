"use client";
import { useHistory } from "@/hooks/useHistory";
import { FormEvent, useState } from "react";
import "@/styles/new-history.css";

export default function newHistory() {
  const [image, setImage] = useState<File | null>(null);
  const { addNewHistory, loading, msgError } = useHistory();

  const submitHistory = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (image !== null) {
      addNewHistory(image);
    }
  };
  return (
    <section className="page-new-history">
      <form onSubmit={submitHistory} className="form-new-history">
        <label htmlFor="history" className="label-new-history">
          Sube tu imagen a la historia
        </label>
        {loading && <strong className="title-loading">Subiendo imagen...</strong>}
        {msgError && <strong className="title-error">{msgError}</strong>}
        <input
          type="file"
          accept="image/*"
          id="history"
          name="history"
          className="input-new-history"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
        />
        <button type="submit" className="button-new-history">
          Upload
        </button>
      </form>
    </section>
  );
}
