import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import "../styles/home.css";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";

export const Home = () => {
  const [data] = useFetch({ path: "/products?limit=5", dependencies: [] });
  return (
    <div className="home">
      <div className="about">
        <div className="about-text">
          <p className="about-heading">
            Your one-stop destination for all your shopping needs
          </p>
          <p className="about-description">
            Discover an unparalleled shopping experience with our extensive
            selection of products, unbeatable prices, and exceptional customer
            service. Shop now and transform your shopping journey with us.
          </p>
        </div>
        <Link to="/shop/all">
          <Button value="Shop Now" />
        </Link>
      </div>
      <div className="home-items">
        <p>Featured Items</p>
        <div className="cards">
          {data &&
            data.map((item) => {
              return <Card key={item.id} card={item} />;
            })}
        </div>
      </div>
    </div>
  );
};
