import { HashLink as Link } from "react-router-hash-link";
import classes from "./Navbar.module.css";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0 };
  const animateTo = { opacity: 1 };

  return (
    <nav className={classes.SideNav}>
      <ul>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link smooth to="#contact" style={{ color: "black" }}>
            Contact
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link smooth to="#about" style={{ color: "black" }}>
            About Me
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link smooth to="#resume" style={{ color: "black" }}>
            Résumé
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link smooth to="#work" style={{ color: "black" }}>
            Work
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link smooth to="#home" style={{ color: "black" }}>
            Home
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default NavLinks;
