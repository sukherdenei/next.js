// import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import "./style.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.xx}>
        <h2>Hello world</h2>
      </div>
      <div className={styles.cardContainer}>
        <Card
          name="Naruto"
          description={"lorem10"}
          imgUrl={
            "https://easydrawingart.com/wp-content/uploads/2023/06/15-step-by-step-Sasuke-drawing.jpg"
          }
        />
        <Card
          name="Naruto"
          description={"lorem20"}
          imgUrl={
            "https://www.hindustantimes.com/ht-img/img/2023/07/23/1600x900/Sakura_Sasuke-transformed_1682517759260_1690106645022.webp"
          }
        />
      </div>{" "}
      <Footer />
    </div>
  );
}
