import { style } from "@vanilla-extract/css";

export const expertContainer = style({
  margin: "0 50px",
  "@media": {
    "screen and (max-width: 768px)": {
      margin: "0 30px",
    },
  },
});
export const sectionTitle = style({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
});

export const expertsSection = style({
  padding: "10px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
});
