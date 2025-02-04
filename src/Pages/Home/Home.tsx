import Banner from "./Banner";
import HomeBlogs from "./HomeBlogs";
import HomeProduct from "./HomeProduct";
import StoreLanding from "./StoreLanding";
import TopBrands from "./TopBrand";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeProduct />
      <StoreLanding />
      <HomeBlogs />
      <TopBrands />
    </div>
  );
};

export default Home;
