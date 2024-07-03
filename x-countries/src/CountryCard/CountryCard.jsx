//import countrystyles from "./CountryCard.css";
import styles from "./CountryCard.module.css";

const CountryCard = ({ cname, cimage }) => {
  return (
    <div className={styles.card}>
      <img src={cimage} alt={cname} className={styles.countryimage} />
      <h3>{cname}</h3>
    </div>
  );
};
export default CountryCard;
