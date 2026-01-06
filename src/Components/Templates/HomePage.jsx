import React, { useEffect, useState } from "react";
import TableCoin from "../Modules/Tablecoin";
import { getCoinList } from "../../Services/cryptoApi";
import Pagination from "../Modules/pagination";
import Search from "../Modules/Search";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    setIsLoading(true);
    try {
      fetch(getCoinList(page, currency))
        .then((res) => res.json())
        .then((json) => setCoins(json));
      setIsLoading(false);
    } catch (error) {
      console.log(error); 
    }
  }, [page, currency]);
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
