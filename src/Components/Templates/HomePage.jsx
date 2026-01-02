import React, { useEffect, useState } from "react";
import TableCoin from "../Modules/Tablecoin";
import { getCoinList } from "../../Services/cryptoApi";
import Pagination from "../Modules/pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetch(getCoinList(page))
      .then((res) => res.json())
      .then((json) => setCoins(json));
    setIsLoading(false);
  }, [page]);
  return (
    <div>
      <Pagination page={page} setPage={setPage} />
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
