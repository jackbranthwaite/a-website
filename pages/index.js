import Header from "../components/header/Header";
import styles from "../styles/Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.Homepage}>
      <div className={styles.HomepageContainer}>
        <Header />
      </div>
    </div>
  );
};

export default Homepage;
