import Button from "@mui/material/Button";

export default function Buttons({ color, text }) {
   return (
      <Button color={color} variant="outlined">{text}</Button>
   )
}
