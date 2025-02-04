import Banner from "./Banner";
import HomeBlogs from "./HomeBlogs";
import HomeProduct from "./HomeProduct";
import TopBrands from "./TopBrand";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeProduct />
      <HomeBlogs />
      <TopBrands />
    </div>
  );
};

export default Home;
