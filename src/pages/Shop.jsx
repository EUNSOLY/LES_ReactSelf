import { useState } from "react";

import AllList from "./AllList";
function Shop(props) {
  let [dataList, setDataList] = useState([...props.data]);
  console.log("shop", dataList);

  return (
    <section className="Shop mw">
      <h1>Shop The Latest</h1>

      <AllList
        data={props.data}
        dataList={dataList}
        setDataList={setDataList}
      />
    </section>
  );
}

export default Shop;
