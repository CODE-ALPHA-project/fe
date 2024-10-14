import { style } from "@vanilla-extract/css";

const mobileBreakpoint = "768px";
// const tabletBreackpoint = "992px";

export const banner = style({
  display: "flex",
  flexDirection: "column",
  background: "linear-gradient(to top, #000000, #3b4b66)",
  color: "white",
  // borderRadius: "10px",
  margin: "0",
  padding: "20px",
  "@media": {
    [`screen and (min-width: ${mobileBreakpoint})`]: {
      flexDirection: "row",
      alignItems: "center",
      padding: "40px",
    },
  },
});

export const bannerContent = style({
  flex: 1,
  textAlign: "center",
  "@media": {
    [`screen and (min-width: ${mobileBreakpoint})`]: {
      textAlign: "left",
      marginRight: "40px",
    },
  },
});

export const iconWrapper = style({
  marginBottom: "20px",
});

export const icon = style({
  fontSize: "32px",
});

export const title = style({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "15px",
  "@media": {
    [`screen and (min-width: ${mobileBreakpoint})`]: {
      fontSize: "32px",
    },
  },
});

export const description = style({
  fontSize: "14px",
  marginBottom: "10px",
  "@media": {
    [`screen and (min-width: ${mobileBreakpoint})`]: {
      fontSize: "16px",
    },
  },
});

export const bannerImage = style({
  flex: 1,
  marginTop: "20px",
  "@media": {
    [`screen and (min-width: ${mobileBreakpoint})`]: {
      marginTop: 0,
      maxWidth: "50%",
    },
  },
});
