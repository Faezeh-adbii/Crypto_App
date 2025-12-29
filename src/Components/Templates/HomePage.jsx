import React, { useEffect, useState } from "react";
import TableCoin from "../Modules/Tablecoin";
import { getCoinList } from "../../Services/cryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading , setIsLoading]=useState(true); 
  useEffect(() => {
    fetch(getCoinList())
      .then((res) => res.json())
      .then((json) => setCoins(json));
      setIsLoading(false);
  }, []);
  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
