import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import ListCard from "./ListCard";
import { useState } from "react";
function Detail(props) {
  console.log("디테일", props.data);

  let { id } = useParams();
  console.log("파람스", id);
  let data = props.data[id - 1];
  console.log(" 데이타", data);
  let dataList = props.data.filter((a) => a.category === data.category);
  console.log("dataList", dataList);
  let [count, setCount] = useState(1);
  return (
    <section className="Detail mw">
      <div className="DetailCon">
        <div className="imgCon">
          <img
            src={`${process.env.PUBLIC_URL}/img/${data.img}`}
            alt={data.title}
          />
        </div>
        <div className="DetailText">
          <h2>{data.title}</h2>
          <p>{data.price}원</p>
          <div className="cartWrap">
            <div className="countBtn">
              <span className="plus">-</span>
              <span>{count}</span>
              <span className="minus">+</span>
            </div>
            <div className="cartBtn">
              <span>ADD TO CART</span>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="listCon"
      >
        {dataList.map((item, i) => {
          return (
            <SwiperSlide className="slide">
              <ListCard item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
export default Detail;
