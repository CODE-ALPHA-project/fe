import { style } from "@vanilla-extract/css";

export const qnaSection = style({
  margin: "40px 0",
  backgroundColor: "lightgray",
  padding: "15px",
  border: "none",
});

export const sectionTitle = style({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
});

export const sectionDescription = style({
  fontSize: "16px",
  color: "#666",
  marginBottom: "20px",
});

export const buttonContainer = style({
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
});

export const qnaButton = style({
  padding: "10px 20px",
  border: "1px solid #007bff",
  borderRadius: "5px",
  color: "#007bff",
  background: "white",
  cursor: "pointer",
});

export const askButton = style({
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  color: "white",
  background: "#007bff",
  cursor: "pointer",
});

export const qnaList = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "20px",
  "@media": {
    "screen and (max-width: 767px)": {
      gridTemplateColumns: "1fr",
    },
  },
});
export const qnaItem = style({
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  padding: "20px",
  backgroundColor: "white",
  cursor: "pointer",
});

export const category = style({
  display: "inline-block",
  padding: "5px 10px",
  backgroundColor: "#f0f0f0",
  borderRadius: "15px",
  fontSize: "12px",
  marginBottom: "10px",
});

export const title = style({
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
});

export const expertInfo = style({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
});

export const expertImage = style({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  marginRight: "10px",
});

export const expertName = style({
  fontSize: "14px",
  color: "#666",
});

export const preview = style({
  fontSize: "14px",
  color: "#333",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  maxHeight: "2.6em",
});
