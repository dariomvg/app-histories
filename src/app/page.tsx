"use client";
import "../styles/main.css";
import { useRef } from "react";
import { useHistory } from "@/hooks/useHistory";
import Link from "next/link";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { user, logout } = useHistory();

  const handleWheel = (event: any): void => {
    event.preventDefault();
    if (containerRef.current) {
      containerRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <main className="main">
      <section
        className="container-histories"
        onWheel={handleWheel}
        ref={containerRef}>
        <nav className="nav">
          {user.username ? (
            <>
              <strong className="title-nav">{user.username}</strong>

              <Link href="/new-history" className="link-add">
                Agregar historia
              </Link>

              <button className="btn button-nav" onClick={logout}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link href="/register" className="link-nav">
              Registrarse
            </Link>
          )}
        </nav>
        {user.histories.length > 0 && (
          <Link className="history-user" href={`/history/${user.username}`}>
            <img
              src={user.profile_picture}
              alt="user profile picture"
              width={100}
              height={100}
              className="image-user"
              title={user.username}
              loading="lazy"
            />
          </Link>
        )}
      </section>
    </main>
  );
}
