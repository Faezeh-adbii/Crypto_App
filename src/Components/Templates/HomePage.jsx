import React, { useEffect, useState } from "react";
import TableCoin from "../Modules/Tablecoin";

function HomePage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&CG-pLBx2n6DhXSgPeXMxD12vVBj	"
    )
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
