import Head from "next/head";
import styles from "./index.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerBgImage}></div>
      <div className={styles.bannerContent}>
        <div className={styles.bannerTitle}>
          <div>Welcome</div>
          <div>to AWARE!</div>
        </div>
        <div className={styles.bannerText}>
          Join the wom(b)manhood to raise awareness for gender equality!
        </div>
        <div style={{ marginTop: 32 }}>
          <a
            href="https://opensea.io/"
            target="_blank"
            className={styles.buttonOutline}
          >
            Available on OpenSea
          </a>
        </div>
      </div>
    </div>
  );
}

function Section(props) {
  return <div className={styles.sectionContainer}>{props.children}</div>;
}
function Left(props) {
  return <div className={styles.left}>{props.children}</div>;
}
function Right(props) {
  return <div className={styles.right}>{props.children}</div>;
}
export default function IndexPage({ postList }) {
  return (
    <div>
      <Head>
        <title>AWARE NFT</title>
      </Head>

      <Banner />

      <Section>
        <Left>
          <img src={"/img/aware1.png"} alt="" />
        </Left>
        <Right>
          <h2 className={styles.sectionTitle1}>
            Happy birthday! WOMB 1, DEC 1ST
          </h2>
          <h3 className={styles.sectionTitle2}>About AWARE NFT</h3>
          <div className={styles.sectionText}>
            AWARE stands for all Wom(b)men Are Real Epic. AWARE NFTs are 500
            Collectibles on the Ethereum Blockchain. Each piece is special and
            diverse raising awareness for gender equality in the NFT space.
            AWARE gives a feminist POV in the NFT dialogue.
          </div>
        </Right>
      </Section>

      <Section>
        <Left>
          <h2 className={styles.sectionTitle1}>FAQ</h2>
          <h3 className={styles.sectionTitle2}>
            Why do your drawings look like wombs?
          </h3>
          <div className={styles.sectionText}>
            Our wombs are important! They are amazing, driven, special, and
            emotional. We created the character because the womb is the ultimate
            symbol of strength. And also we were tired of having to justify our
            hormones and to prove that wom(b)men can do anything. The funny
            cartoon characters are a way to celebrate, empower, vent, and
            commiserate wom(b)manhood.{" "}
          </div>
          <h3 className={styles.sectionTitle2}>Are those hands ovaries?</h3>
          <div className={styles.sectionText}>
            No, they are furry paws. Actually we wanted to make them look really
            creepy and scare people. They were drawn after having mood swings
            and lots of wine. Did you see all of the creepy hands? Some hold
            grenades.
          </div>
        </Left>
        <Right>
          <img src={"/img/aware11.png"} alt="" />
        </Right>
      </Section>
    </div>
  );
}
