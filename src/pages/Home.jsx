import HomeCarousel from "../components/HomeCarousel";
import HomeCategories from "../components/HomeCategories";
import HomeContent from "../components/HomeContent";
import HomeSeries from "../components/HomeSeries";
import HomeTopSeller from "../components/HomeTopSeller";

function Home() {
  return (
    <>
      <HomeCarousel></HomeCarousel>

      <HomeContent
        bgColor={"white"}
        txtColor={"black"}
        headerTitle={"REALISTIC SIMULATION HARDWARE"}
        imgLink={"https://fanatec.com/media/image/64/81/70/DD2_frontpage3.jpg"}
        description={`Enthusiast-grade equipment, built by sim racers, for sim racers.Designed and engineered in Germany, Fanatec racing simulation hardware is built to the highest standards so that you can perform at your best. It’s time to stop playing with toys.`}
      ></HomeContent>
      <HomeContent
        bgColor={"gray-800"}
        txtColor={"white"}
        headerTitle={"PRODUCT BUNDLES"}
        imgLink={
          "https://fanatec.com/media/image/b7/49/e5/GT_DD_PRO_Prem-1280x1280.png"
        }
        description={`Choose from our carefully selected bundle offers, from starter kits to premium setups.`}
      ></HomeContent>
      <HomeTopSeller></HomeTopSeller>
      <HomeCategories></HomeCategories>
      <HomeSeries></HomeSeries>
    </>
  );
}
export default Home;
