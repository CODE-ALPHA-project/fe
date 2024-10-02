import { style, globalStyle, keyframes } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  overflowX: "hidden",
});

export const fadeIn = keyframes({
  "0%": { opacity: 0, transform: "translateY(-20px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const shimmer = keyframes({
  "0%": { backgroundPosition: "-1000px 0" },
  "100%": { backgroundPosition: "1000px 0" },
});

export const container = style({
  fontFamily: "'Noto Sans KR', Arial, sans-serif",
  padding: "0",
  margin: "0",
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",

  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
    },
    "screen and (max-width: 480px)": {
      fontSize: "14px",
    },
  },
});

export const main = style({
  flex: 1,
  padding: "40px 20px",
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "20px 10px",
    },
  },
});

export const heroSection = style({
  textAlign: "center",
  marginBottom: "40px",
});

export const heroTitle = style({
  fontSize: "2.5rem",
  marginBottom: "20px",
  color: "#2c3e50",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "2rem",
    },
  },
});

export const heroDescription = style({
  fontSize: "1.2rem",
  color: "#34495e",
  marginBottom: "30px",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1rem",
    },
  },
});

export const button = style({
  padding: "12px 24px",
  backgroundColor: "#2ecc71",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "1.1rem",
  transition: "background-color 0.3s ease",
  ":hover": {
    backgroundColor: "#27ae60",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "10px 20px",
      fontSize: "1rem",
    },
  },
});

export const featuresSection = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "30px",
  marginTop: "50px",
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "20px",
    },
  },
});

export const featureCard = style({
  backgroundColor: "#f9f9f9",
  padding: "30px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease",
  ":hover": {
    transform: "translateY(-5px)",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "20px",
    },
  },
});

export const featureIcon = style({
  fontSize: "3rem",
  marginBottom: "20px",
  color: "#3498db",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "2.5rem",
    },
  },
});

export const featureTitle = style({
  fontSize: "1.5rem",
  marginBottom: "10px",
  color: "#2c3e50",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1.3rem",
    },
  },
});

export const featureDescription = style({
  color: "#34495e",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "0.9rem",
    },
  },
});

export const footer = style({
  backgroundColor: "#34495e",
  color: "#ecf0f1",
  padding: "30px 0",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  width: "100%",
  boxSizing: "border-box",
  margin: "0",
  "::before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    right: "-50%",
    bottom: "-50%",
    background:
      "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
    animation: `${shimmer} 3s infinite linear`,
    zIndex: 1,
  },
});

export const footerContent = style({
  position: "relative",
  zIndex: 2,
});

export const footerLink = style({
  color: "#3498db",
  textDecoration: "none",
  margin: "0 10px",
  transition: "color 0.3s ease",
  ":hover": {
    color: "#2980b9",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      display: "block",
      margin: "10px 0",
    },
  },
});
