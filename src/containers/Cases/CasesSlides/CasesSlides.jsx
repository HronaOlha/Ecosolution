import PropTypes from "prop-types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Autoplay } from "swiper/modules";

import { GoArrowUpRight } from "react-icons/go";

import { slides } from "../../../constants/constants";

import {
  CasesList,
  CasesItem,
  CasesThumb,
  MainInfoBox,
  InfoBox,
} from "./CasesSlides.styled";

const CasesSlides = ({
  slidesPerView,
  slidesGap,
  handleSwiper,
  handleSlideChange,
}) => {
  return (
    <CasesList
      modules={[Navigation, Autoplay]}
      speed={800}
      spaceBetween={slidesGap}
      slidesPerView={slidesPerView}
      grabCursor={true}
      navigation={{
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
        clickable: true,
      }}
      autoplay={true}
      loop
      onSwiper={handleSwiper}
      onSlideChange={handleSlideChange}
    >
      {slides.map((item) => (
        <CasesItem key={item.id}>
          <img
            src={item.image}
            srcSet={`${item.image} 1x, ${item.image2x} 2x`}
            alt={item.title}
            loading="lazy"
          />
          <CasesThumb>
            <MainInfoBox>
              <h4>{item.title}</h4>
              <a
                href="/"
                aria-label="Learn more"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <GoArrowUpRight size="100%" />
              </a>
            </MainInfoBox>

            <InfoBox>
              <p>{item.text}</p>
              <p>{item.date}</p>
            </InfoBox>
          </CasesThumb>
        </CasesItem>
      ))}
    </CasesList>
  );
};

export default CasesSlides;

CasesSlides.propTypes = {
  slidesPerView: PropTypes.number.isRequired,
  slidesGap: PropTypes.number.isRequired,
  handleSwiper: PropTypes.func.isRequired,
  handleSlideChange: PropTypes.func.isRequired,
};
