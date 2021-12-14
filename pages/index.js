import Head from "next/head";
import styles from "./index.module.css";
import img_banner from "../public/img/banner1.jpg";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerRel}>
        <div className={styles.bannerAbs}>
          <img src={"/img/banner1.jpg"} />
        </div>

        <div className={styles.bannerContent}>
          <div className={styles.bannerContentBox}>
            <div className={styles.bannerTitle}>
              <div>Welcome</div>
              <div>to AWARE!</div>
            </div>
            <div className={styles.bannerText}>
              Join the wom(b)manhood to raise awareness for gender equality!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IndexPage({ postList }) {
  return (
    <div>
      <Head>
        <title>AWARE NFT</title>
      </Head>

      <Banner />

      <div className={styles.content}>asdfadf</div>
    </div>
  );
}
