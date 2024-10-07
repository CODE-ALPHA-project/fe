import { style } from "@vanilla-extract/css";

const mobileBreakpoint = "768px";

export const sliderContainer = style({
  position: "relative",
  width: "100%",
  paddingBottom: "75%", // 4:3 aspect ratio
  overflow: "hidden",
  borderRadius: "10px",
  cursor: "pointer",
  "@media": {
    [`screen and (min-width: ${mobileBreakpoint})`]: {
      paddingBottom: "56.25%", // 16:9 aspect ratio for desktop
    },
  },
});

export const slider = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
});

export const slide = style({
  flexShrink: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export const sliderControls = style({
  position: "absolute",
  bottom: "10px",
  right: "10px",
  display: "flex",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.5)",
  borderRadius: "15px",
  padding: "5px",
});

const buttonBase = style({
  background: "none",
  border: "none",
  color: "white",
  fontSize: "18px",
  cursor: "pointer",
  padding: "0 5px",
});

export const prevButton = style([buttonBase]);

export const nextButton = style([buttonBase]);

export const slideCounter = style({
  color: "white",
  fontSize: "12px",
  margin: "0 5px",
});
