"use client";
import { CardHistory } from "@/components/CardHistory";
import { useHistory } from "@/hooks/useHistory";
import { useEffect, useState } from "react";
import iconBack from "@/assets/arrow-back.svg";
import iconNext from "@/assets/arrow-next.svg";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/Loader";
import Link from "next/link";
import "@/styles/history.css";

export default function History() {
  const [index, setIndex] = useState<number>(0);
  const { user, removeHistory } = useHistory();
  const router = useRouter();

  const nextSlide = () => {
    if (index < user.histories.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      router.push("/");
    }
  };

  const prevSlide = () => {
    if (index <= 0) {
      router.push("/");
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 8000);
    return () => clearInterval(interval);
  }, [index, user.histories.length]);

  return user.histories.length > 0 ? (
    <section className="page-history">
      <div className="header-history">
        <Link href="/" className="link-return">
          <img src={iconBack.src} alt="return page" width={35} height={35} />
        </Link>
      </div>

      <div className="container-controls">
        <img
          src={iconBack.src}
          alt="arrow back"
          width={50}
          height={50}
          onClick={prevSlide}
          className="icon-arrow back"
          title="prev"
          loading="lazy"
        />
        <img
          src={iconNext.src}
          alt="arrow back"
          width={50}
          height={50}
          onClick={nextSlide}
          className="icon-arrow next"
          title="next"
          loading="lazy"
        />
      </div>

      <div className="container-history">
        {user.histories.map(
          (history, i) =>
            i === index && (
              <CardHistory
                key={history.id}
                history={history}
                removeHistory={removeHistory}
              />
            )
        )}
      </div>
    </section>
  ) : (
    <Loader />
  );
}
