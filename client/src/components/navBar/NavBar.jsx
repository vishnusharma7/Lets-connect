import "./navBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

function NavBar() {

  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navBar">
     <div className="left">
      <Link tp="/" style={{textDecoration: "none"}}>
      <span>Let's Connect</span>
      </Link>
      <HomeOutlinedIcon />
      {darkMode ? <LightModeOutlinedIcon style={{cursor:'pointer'}}  onClick={toggle}/> : <NightsStayOutlinedIcon style={{cursor:'pointer'}}   onClick={toggle}/>}
      <GridViewOutlinedIcon />
      <div className="search">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search...." />
      </div>
     </div>
      <div className="right">
        <Person2OutlinedIcon />
        <MailOutlineOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
        <img
            src={"/upload/" + currentUser.profilePic}
            alt=""
          />          <span>{currentUser.name}</span>
        </div>

      </div>
    </div>
  );
}

export default NavBar;
