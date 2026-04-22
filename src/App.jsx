import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import CardHolder from "./Components/Products/CardHolder/CardHolder";
import Stat from "./Components/Stat/Stat";
import Cart from "./Components/Cart/Cart";
import GetStarted from "./Components/GetStarted/GetStarted";
import PricingHolder from "./Components/Pricing/PricingHolder/PricingHolder";
import Footer from "./Components/Footer/Footer";


const fetchData = async () => {
  const res = await fetch("/Card.json");
  return res.json();
}

function App() {

  const CardPromise = fetchData();
  const [selected, setSelected] = useState("product");
  const [cardIds, setCardIds] = useState([]);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <Stat />
        <Suspense fallback={<div className="w-3/4"></div>}>
          <CardHolder
            CardPromise={CardPromise}
            selected={selected}
            setSelected={setSelected}
            cardIds={cardIds}
            setCardIds={setCardIds}
          />
        </Suspense>

        <GetStarted />

        <PricingHolder />

        <Footer />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
