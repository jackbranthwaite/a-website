import Header from "../components/header/Header";
import HomepageCard from "../components/homepage-card/HomepageCard";
import s from "../styles/Homepage.module.css";

const Homepage = () => {
  return (
    <div className={s.Homepage}>
      <Header />
      <div className={s.HomepageContentContainer}>
        <HomepageCard title="writing" />
        <HomepageCard title="photography" />
      </div>
    </div>
  );
};

export default Homepage;
