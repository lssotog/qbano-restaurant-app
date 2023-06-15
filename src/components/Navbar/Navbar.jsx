import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <section className={classes.navbarContainer}>
        <nav>
          <a>Menu</a>
          <a>Combos</a>
          <a>Favoritos</a>
        </nav>
        <p>Tiempo de entrega</p>
      </section>
    </>
  );
};
