import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className="display-2 w-100 text-center mt-5">Welcome! <br/> Inspired Edibles</h1>
    </div>
  );
}
