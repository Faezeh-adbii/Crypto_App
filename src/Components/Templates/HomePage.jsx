import React, { useEffect, useState } from "react";
import TableCoin from "../Modules/Tablecoin";
import { getCoinList } from "../../Services/cryptoApi";
import Pagination from "../Modules/pagination";
import Search from "../Modules/Search";
import Chart from "../Modules/Chart";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("USD");
  const [chart, setChart] = useState(null);

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
      <TableCoin coins={coins} isLoading={isLoading} setChart={setChart} />
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} /> }
    </div>
  );
}

export default HomePage;
