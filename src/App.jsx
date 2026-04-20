import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import CardHolder from "./Components/Products/CardHolder/CardHolder";
import Stat from "./Components/Stat/Stat";


const fetchData = async () => {
  const res = await fetch("/Card.json");
  return res.json();
}

function App() {
  const CardPromise = fetchData();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <Stat />
        <Suspense fallback={<div className="flex items-center justify-center"><span className="loading loading-spinner loading-xl"></span></div>}>
          <CardHolder CardPromise={CardPromise} />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
