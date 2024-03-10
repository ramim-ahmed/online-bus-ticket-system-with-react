import Achive from "../components/Achive";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Offers from "../components/Offers";
import SeatSelection from "../components/SeatSelection";

export default function Home() {
  return (
    <div>
        <Header />
        <Banner />
        <Achive />
        <Offers />
        <SeatSelection />
        <Footer />
    </div>
  )
}
