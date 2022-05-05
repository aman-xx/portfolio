import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>M E R N</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a href="https://aman-xx.netlify.app/" target="_blank"><img src={Sidebar} alt="interestApp" style={{height:'213px'}}/></a>
          
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://aman-xx.github.io/shopping-site/" target="_blank">  <img src={Ecommerce} alt="shoppingSite" style={{height:'213px'}} /></a>         
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://aman-xx.github.io/imgfinder/" target="_blank"> <img src={MusicApp} alt="imgFinder" style={{height:'213px'}} /></a>
         
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://aman-xx.github.io/netflix_cards/" target="_blank"><img src={HOC} alt="netflix_cards" style={{height:'213px'}}/></a>
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
