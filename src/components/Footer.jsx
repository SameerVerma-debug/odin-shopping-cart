import "../styles/footer.css";
import {ProductCategories} from "./ProductCategories"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="site-info">
        <img className="footer-logo" src="/assets/images/logo.svg" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nihil
          deleniti alias consequatur voluptates in necessitatibus, molestiae rem
          eligendi eveniet debitis, quam, esse laudantium eum consequuntur
          nostrum soluta id voluptas!
        </p>
      </div>

      <div className="links">
        <div className="shop-links">
          <h3>SHOP</h3>
          <ProductCategories/>
        </div>
        <div className="other-links">
          <h3>USEFUL LINKS</h3>
          <a target="_blank" href="https://github.com/SameerVerma-debug/odin-shopping-cart">Repository</a>
          <a target="_blank" href="https://github.com/SameerVerma-debug">Sameer Verma Github</a>
        </div>
      </div>
    </div>
  );
};
