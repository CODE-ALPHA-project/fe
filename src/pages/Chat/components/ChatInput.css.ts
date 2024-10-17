import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../ChatPage.css";

export const inputForm = style({
  display: "flex",
  alignItems: "center",
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "9999px",
  padding: "4px",
});

export const input = style({
  flex: 1,
  border: "none",
  outline: "none",
  padding: "8px 12px",
  fontSize: "14px",
  backgroundColor: "transparent",
});

const buttonBase = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const uploadButton = style([
  buttonBase,
  {
    color: vars.color.secondary,
  },
]);

export const sendButton = style([
  buttonBase,
  {
    color: vars.color.accent,
  },
]);

export const disabled = style({
  opacity: 0.5,
  cursor: "not-allowed",
});

export const inputVariants = styleVariants({
  enabled: [input],
  disabled: [
    input,
    {
      color: vars.color.secondary,
      "::placeholder": {
        color: vars.color.secondary,
      },
    },
  ],
});

export const buttonVariants = styleVariants({
  enabled: [],
  disabled: [disabled],
});

// export const textAreaStyle = style{{
//     resize: 'none',
//     overflow: 'hidden',
//     fontFamily: 'Arial, sans-serif',
//     fontSize: '14px',
//     lineHeight: '1.5',
//     padding: '8px 12px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
// }};