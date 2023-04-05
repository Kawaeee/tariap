import { Inter } from "next/font/google"
import styles from "./page.module.css"
import BackgroundImage from "./components/BackgroundImage";
import CustomParticles from "./components/Particle";

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={styles.main}>
      <BackgroundImage />
      <CustomParticles />
    </main>
  )
}
