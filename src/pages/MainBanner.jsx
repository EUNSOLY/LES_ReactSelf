import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Link } from 'react-router-dom';
function MainBanner() {
  return (
    <section className="MainBanner mw">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="imgCon bg1">
            <div className="imgText">
              <h2>Gold big hoops</h2>
              <p>$ 68.00</p>
              <Link to="/Shop" className="btn">
                View Product
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgCon bg2">
            <div className="imgText">
              <h2>Gold big hoops</h2>
              <p>$ 68.00</p>
              <Link to="/Shop" className="btn">
                View Product
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgCon bg3">
            <div className="imgText">
              <h2>Gold big hoops</h2>
              <p>$ 68.00</p>
              <Link to="/Shop" className="btn">
                View Product
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default MainBanner;
