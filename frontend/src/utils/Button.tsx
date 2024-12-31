import Button from "@mui/material/Button";

export default function Buttons({ color, text, handler }) {
   return (
      <Button color={color} variant="outlined" size="medium" onClick={handler}>{text}</Button>
   )
}
