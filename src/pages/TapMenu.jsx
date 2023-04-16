import { useState } from "react";
import TapContentOne from "./TapContentOne";
import TapContentTwo from "./TapContentTwo";
import TapContentThree from "./TapContentThree";
function TapMenu() {
  let [count, setCount] = useState(0);
  return (
    <section className="TapMenu">
      <ul className="tapCon">
        <li
          onClick={() => {
            setCount(0);
          }}
        >
          TapMenu1
        </li>
        <li
          onClick={() => {
            setCount(1);
          }}
        >
          TapMenu2
        </li>
        <li
          onClick={() => {
            setCount(2);
          }}
        >
          TapMenu3
        </li>
      </ul>
      {count === 0 ? (
        <TapContentOne />
      ) : count === 1 ? (
        <TapContentTwo />
      ) : count === 2 ? (
        <TapContentThree />
      ) : null}
    </section>
  );
}
export default TapMenu;
