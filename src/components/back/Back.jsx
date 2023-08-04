"use client";
import { useRouter } from "next/navigation";
import styles from "./Back.module.css";

export default function Back() {
  const router = useRouter();

  function handleBack() {
    router.back();
  }

  return (
    <div onClick={handleBack} className={styles.formBack}>
      <button>Volver</button>
    </div>
  );
}
