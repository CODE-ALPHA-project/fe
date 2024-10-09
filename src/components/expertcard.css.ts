import { style } from "@vanilla-extract/css";

export const expertCardsContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "20px",
  padding: "20px",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
});

export const expertCard = style({
  display: "flex",
  marginBottom: "20px",
  flexDirection: "column",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  backgroundColor: "white",
  width: "100%",
  gap: "10px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
  ":hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
});

export const expertImageContainer = style({
  width: "150px",
  height: "150px",
  margin: "20px auto",
  borderRadius: "50%",
  overflow: "hidden",
  border: "5px solid white",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
});

export const expertImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
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
