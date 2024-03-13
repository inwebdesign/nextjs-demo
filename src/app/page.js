import styles from "./page.module.css";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <h2>Heelo from Home!</h2>
      </div>
    </main>
  );
}
