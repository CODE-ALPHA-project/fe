import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./ChatPage.css";

globalStyle("body", {
  margin: 0,
  padding: 0,
  fontFamily: "Inter, sans-serif",
  backgroundColor: vars.color.background,
  color: vars.color.text,
});

globalStyle("*", {
  boxSizing: "border-box",
});
