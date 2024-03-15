import { AppBar, Toolbar, styled } from "@mui/material";
import { routePath } from "../routes/route";
import { Link } from "react-router-dom";


const StyledAppBar = styled(AppBar)({
  background: "#2d2d2d",
  height: 64,
  "& > div > *": {
    marginRight: 20,
    fontSize: 14,
    color: "inherit",
    textDecoration: "none",
  },
});

const LogoImage = styled("img")({
  width: 95,
  marginBottom: 6,
  borderRadius: "50%", // Rounded corners
  transition: "transform 0.2s", // Smooth transition effect
  cursor: "pointer", // Cursor changes to pointer on hover
  "&:hover": {
    transform: "scale(1.1)", // Zoom effect on hover
  },
});

const Header = () => {
  const logo =
    "https://cdn-fkjgg.nitrocdn.com/SszKIyBstXKabdaSXAUKkGrvzkHpxjvP/assets/images/optimized/rev-eb20826/wp-content/uploads/2016/12/logo.jpg";

  return (
    <StyledAppBar>
      <Toolbar>
        <Link to={routePath.home}>
          <LogoImage src={logo} alt="logo" />
        </Link>
        <Link to={routePath.create}>Post a job</Link>
        <Link to={routePath.posts}>Find jobs</Link>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
