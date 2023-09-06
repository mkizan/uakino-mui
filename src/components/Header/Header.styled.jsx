import Button from "@mui/material/Button";
import { styled } from "@mui/material";

export const MenuButton = styled(Button)(({ theme }) => ({
  marginRight: 10,
  fontWeight: 500,
  color: theme.palette.primary.light,
  "&:hover, &:active": {
    color: "yellow",
  },
  "&:last-child": {
    marginLeft: "auto",
    margiRight: 0,
  },
}));

// &:last-child {
//     margin-right: 0;
//   }
//   text-decoration: none;
//   color: white;
//   transition: color 0.2s ease-in-out;

//   &:hover,
//   &:active {
//     color: hotpink;
//   }
