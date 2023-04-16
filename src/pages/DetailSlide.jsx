import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import ListCard from "./ListCard";
function DetailSlide(props) {
  let dataList = props.dataList;
  return (
    <section className="DetailSlide">
      <h1>Similar Items</h1>
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
            <SwiperSlide className="slide" key={i}>
              <ListCard item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default DetailSlide;
