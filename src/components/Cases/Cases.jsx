import { useState } from "react";
import {
  CasesSection,
  CasesTitle,
  CasesList,
  CasesItem,
  CasesThumb,
  MainInfoBox,
  InfoBox,
} from "./Cases.styled";
import { slides } from "../../constants/constants";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useDrag } from "react-use-gesture";
import { useMedia } from "react-use";

const Cases = () => {
  const isTouchDevice = useMedia("(hover: none)");

  const [currentSlide, setCurrentSlide] = useState(0);

  const bind = useDrag(
    ({ offset: [offsetX], vxvy: [vx] }) => {
      const delta = offsetX / window.innerWidth;
      const newSlide =
        currentSlide + (delta < -0.5 || (vx > 0.5 && delta < 0) ? 1 : 0);
      setCurrentSlide((prev) =>
        newSlide >= 0 && newSlide < slides.length ? newSlide : prev
      );
    },
    {
      axis: "x",
      initial: () => [currentSlide * window.innerWidth, 0],
      bounds: { left: 0, right: slides.length * window.innerWidth },
      rubberband: true,
    }
  );

  const slidesPerView = 2;

  const currentSlides = slides.slice(
    currentSlide,
    currentSlide + slidesPerView
  );

  return (
    <CasesSection id="cases">
      <CasesTitle>Successful cases of our company</CasesTitle>
      <p>
        {(currentSlide % slides.length) + 1}/{slides.length}
      </p>
      <button onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}>
        <IoIosArrowRoundBack />
      </button>
      <button
        onClick={() =>
          setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))
        }
      >
        <IoIosArrowRoundForward />
      </button>

      <CasesList {...(isTouchDevice ? {} : bind())}>
        {currentSlides.map((item) => (
          <CasesItem key={item.id}>
            <img src={item.image} alt={item.title} />
            <CasesThumb>
              <MainInfoBox>
                <h4>{item.title}</h4>
                <a href="/">
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
    </CasesSection>
  );
};

export default Cases;

// import { useState } from "react";

// import {
//   CasesSection,
//   CasesTitle,
//   CasesList,
//   CasesItem,
//   CasesThumb,
//   MainInfoBox,
//   InfoBox,
// } from "./Cases.styled";
// import { slides } from "../../constants/constants";

// import { GoArrowUpRight } from "react-icons/go";
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// const Cases = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   function turnSlide(n) {
//     if (currentSlide < slides.length - 1) {
//       setCurrentSlide((value) =>
//         slides.findIndex((item) => item.id === value + n)
//       );
//     } else {
//       setCurrentSlide(0);
//     }
//   }

//   const slidesPerView = 2;

//   const currentSlides = slides.slice(
//     currentSlide,
//     currentSlide + slidesPerView
//   );

//   console.log("currentSlides", currentSlide, currentSlide + slidesPerView);
//   console.log(currentSlides);

//   return (
//     <CasesSection id="cases">
//       <CasesTitle>Successful cases of our company</CasesTitle>
//       <p>
//         {currentSlide + 1}/{slides.length}
//       </p>
//       <button
//         onClick={() => {
//           turnSlide(-1);
//         }}
//       >
//         <IoIosArrowRoundBack />
//       </button>
//       <button
//         onClick={() => {
//           turnSlide(1);
//         }}
//       >
//         <IoIosArrowRoundForward />
//       </button>

//       <CasesList>
//         {currentSlides.map((item) => (
//           <CasesItem key={item.id}>
//             <img src={item.image} alt={item.title} />
//             <CasesThumb>
//               <MainInfoBox>
//                 <h4>{item.title}</h4>
//                 <a href="/">
//                   <GoArrowUpRight size="100%" />
//                 </a>
//               </MainInfoBox>

//               <InfoBox>
//                 <p>{item.text}</p>
//                 <p>{item.date}</p>
//               </InfoBox>
//             </CasesThumb>
//           </CasesItem>
//         ))}
//       </CasesList>
//     </CasesSection>
//   );
// };

// export default Cases;

// ФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФ

// const [isDragStart, setIsDragStart] = useState(false);
// const [start, setStart] = useState(0);
// const [change, setChange] = useState(0);

// onMouseDown={dragStart}
// onMouseMove={dragging}
// onMouseUp={dragStop}

// function dragStart(e) {
//   setIsDragStart(true);
//   let prevPageX = e.pageX || e.touches[0].pageX;
//   setStart(prevPageX);
//   setChange(0);
// }
// function dragging(e) {
//   if (!isDragStart) return;
//   let positionDiff = (e.pageX || e.touches[0].pageX) - start;
//   setChange(positionDiff);
// }

// function dragStop() {
//   setIsDragStart(false);
//   setStart(0);

//   if (change < 0) {
//     turnSlide(1);
//   } else if (change > 0) {
//     turnSlide(-1);
//   }
// }
