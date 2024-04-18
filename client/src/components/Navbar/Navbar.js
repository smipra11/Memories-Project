import React, { useState } from "react";
import {
  Avatar,
  Button,
  AppBar,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Toolbar,
  Typography,
} from "@mui/material";
import memories from "../../images/memories.png";
import { Link } from "react-router-dom";


const StylesAppBar = styled(AppBar)({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 50px",
});

const StylesDivContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "flex-end",
  width: "400px",
});
const StyledProfile = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "400px",
});
const styledUserName = styled(Typography)({

})

const Navbar = () => {
  const [user, setUser] = useState("");
  return (
    <>
      <StylesAppBar position="static" color="inherit">
        <StylesDivContainer>
          <Typography
            sx={{ color: "rgba(0,183,255, 1)", textDecoration: "none" }}
            component={Link}
            to="/"
            variant="h2"
            align="center"
          >
            Memories
          </Typography>
          <img
            src={memories}
            alt="icon"
            height="60"
            sx={{ marginLeft: "25px" }}
          />
        </StylesDivContainer>
        <StyledToolBar>
          {user?.result ? (
            <StyledProfile>
              <Avatar
               
                alt={user?.result.name}
                src={user?.result.imageUrl}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <styledUserName  variant="h6">
                {user?.result.name}
              </styledUserName>
              <Button
                variant="contained"
                color="secondary"           
              >
                Logout
              </Button>
            </StyledProfile>
          ) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
          )}
        </StyledToolBar>
      </StylesAppBar>
    </>
  );
};

export default Navbar;
