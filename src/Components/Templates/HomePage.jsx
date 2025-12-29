import React, { useEffect, useState } from "react";
import TableCoin from "../Modules/Tablecoin";
import { getCoinList } from "../../Services/cryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(getCoinList())
      .then((res) => res.json())
      .then((json) => setCoins(json));
  }, []);
  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  );
}

export default HomePage;
