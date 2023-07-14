import "./leftBar.scss"
import Diversity2 from '@mui/icons-material/Diversity2';
import Workspaces from '@mui/icons-material/Workspaces';
import Storefront from '@mui/icons-material/Storefront';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import MemoryIcon from '@mui/icons-material/Memory';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";


function LeftBar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <Link tp="/" style={{ textDecoration: "none" }}>

            <div className="user">

              <img src={"/upload/" + currentUser.profilePic} alt="" />
              <span>{currentUser.name}</span>

            </div>
          </Link>
          <div className="item">
            <CalendarMonthIcon />
            <span>Events</span>
          </div>
          <div className="item">
            <SportsEsportsIcon />
            <span>Gaming</span>
          </div>
          <div className="item">
            <CollectionsBookmarkIcon />
            <span>Gallery</span>
          </div>
          <div className="item">
            <OndemandVideoIcon />
            <span>Videos</span>
          </div>
          <div className="item">
            <MessageIcon />
            <span>Messages</span>
          </div>


        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <Diversity2 />
            <span>Freinds</span>
          </div>
          <div className="item">
            <Workspaces />
            <span>Groups</span>
          </div>
          <div className="item">
            <Storefront />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <AlarmOnIcon />
            <span>Watch</span>
          </div>
          <div className="item">
            <MemoryIcon />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <AttachMoneyIcon />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <BookmarkAddedIcon />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <MenuBookIcon />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>

  );
}

export default LeftBar;
