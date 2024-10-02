import { style } from "@vanilla-extract/css";
// import { fadeIn } from "./home.css";

export const sliderContainer = style({
  width: "100%",
  maxWidth: "800px",
  margin: "0 auto 40px",
  overflow: "hidden",
  position: "relative",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  "@media": {
    "screen and (max-width: 768px)": {
      maxWidth: "100%",
      borderRadius: "0",
    },
  },
});

export const slider = style({
  display: "flex",
  transition: "transform 0.5s ease-in-out",
});

export const slide = style({
  minWidth: "100%",
  height: "400px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  "@media": {
    "screen and (max-width: 768px)": {
      height: "300px",
    },
  },
});

// export const slideCaption = style({
//   position: "absolute",
//   bottom: "20px",
//   left: "20px",
//   right: "20px",
//   background: "rgba(0,0,0,0.5)",
//   color: "white",
//   padding: "10px",
//   borderRadius: "5px",
//   animation: `${fadeIn} 0.5s ease-in-out`,
//   zIndex: 10,
//   "@media": {
//     "screen and (max-width: 768px)": {
//       bottom: "10px",
//       left: "10px",
//       right: "10px",
//       padding: "5px",
//       fontSize: "0.9rem",
//     },
//   },
// });

export const sliderButton = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(255,255,255,0.5)",
  border: "none",
  fontSize: "24px",
  padding: "10px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  ":hover": {
    // background: "rgba(255,255,255,0.8)",
    opacity: 0.75,
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "20px",
      padding: "8px",
    },
  },
});

export const prevButton = style([
  sliderButton,
  {
    background: "none",
    left: "10px",
  },
]);

export const nextButton = style([
  sliderButton,
  {
    background: "none",
    right: "10px",
  },
]);
