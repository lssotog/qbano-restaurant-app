import classes from "./Header.module.css";
import logo from "../../assets/logo-qbano.jpg";

export const Header = () => {
  return (
    <>
      <header className={classes.headerContainer}>
        <img src={logo} alt="Logo Sandwish Qbano" style={{ height: "100%" }} />
        <p>Aquí va el input</p>
        <article>
          <p>Mi carrito</p>
        </article>
      </header>
    </>
  );
};
