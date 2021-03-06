import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import omar from "../../assets/img/omar.jpg";
import useStyles from "./style";
import FaceIcon from "@material-ui/icons/Face";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import HttpIcon from "@material-ui/icons/Http";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import SidebarItems from "./SidebarItems";
import "./style.css";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();

  const handleSidebarState = () => {
    setIsOpen(!isOpen);
  };

  const sidebarSectionsItems = (text, index) => {
    const icons = [
      <HomeIcon key={index} />,
      <MenuBookIcon key={index} />,
      <HttpIcon key={index} />,
      <AttachFileIcon key={index} />,
      <PermContactCalendarIcon key={index} />,
    ];
    return (
      <>
        <ListItemIcon>{icons[index]}</ListItemIcon>
        <ListItemText primary={text} />
      </>
    );
  };

  const sidebarProfileInformation = () => {
    return (
      <>
        {isOpen ? (
          <div className="profile">
            <img src={omar} alt="profile" className="profileImg" />
            <h3>{t("name")}</h3>
            <h4>{t("job")}</h4>
          </div>
        ) : (
          <div className="profilePlaceholder">
            {" "}
            <FaceIcon />
          </div>
        )}
      </>
    );
  };

  return (
    <div className={classes.root}>
      {/*Toggle button */}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          }),
        }}
        id="drawer"
      >
        <div className={classes.toolbar}>
          {isOpen ? (
            <IconButton onClick={handleSidebarState}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleSidebarState}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: isOpen,
              })}
              id="hamburger"
            >
              <MenuIcon />
            </IconButton>
          )}
        </div>

        <Divider />
        <List>{sidebarProfileInformation()}</List>
        <Divider />

        <List>
          {[
            t("home"),
            t("about"),
            t("projects"),
            t("resume"),
            t("contact"),
          ].map((section, index) => (
            <SidebarItems
              key={index}
              index={index}
              section={section}
              item={sidebarSectionsItems}
            />
          ))}
        </List>
      </Drawer>
    </div>
  );
}
