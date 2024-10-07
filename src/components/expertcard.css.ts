import { style } from "@vanilla-extract/css";

export const expertCard = style({
  display: "flex",
  flexDirection: "column",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  backgroundColor: "white",
  maxWidth: "300px",
  gap: "10px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.05) translateY(-5px)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
});

export const expertImage = style({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "50%",
  margin: "20px auto",
  border: "5px solid white",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  maxWidth: "150px",
  maxHeight: "150px",
});

export const expertInfo = style({
  padding: "0 20px 20px",
});

export const expertTags = style({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  marginBottom: "10px",
});

export const tag = style({
  display: "inline-block",
  backgroundColor: "#f0f0f0",
  padding: "3px 8px",
  borderRadius: "4px",
  fontSize: "12px",
  margin: "0 5px 5px 0",
});

export const expertName = style({
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "5px",
});

export const expertCompany = style({
  fontSize: "14px",
  color: "#666",
  textAlign: "center",
  marginBottom: "10px",
});

export const expertDescription = style({
  fontSize: "14px",
  marginBottom: "10px",
  textAlign: "center",
});

export const expertTime = style({
  fontSize: "14px",
  color: "#666",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f9f9f9",
  padding: "10px",
  borderRadius: "4px",
});

export const timeIcon = style({
  marginRight: "5px",
});
