import { forwardRef, useState } from "react";
import {
  styled,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Theme,
  CSSObject,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { AnimatePresence, motion } from "framer-motion";

const drawerWidth = 240;

interface MiniDrawerProps {
  open: boolean;
}
function AppSideBar() {
  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const MiniDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })<MiniDrawerProps>(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const AnimatedMiniDrawer = motion(
    forwardRef((props: MiniDrawerProps, ref: React.Ref<HTMLDivElement>) => (
      <MiniDrawer {...props} ref={ref} />
    ))
  );

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const OuterButton = styled(IconButton)(({ theme }) => ({
    position: "fixed",
    top: 0,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["left"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    left: open ? "240px" : "0", // Moves the button to the left when the Sidebar is open
  }));

  return (
    <>
      <OuterButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
        <ChevronLeftIcon />
      </OuterButton>
      <AnimatePresence>
        {open && (
          <AnimatedMiniDrawer open={open}>
            <List>
              {["Item 1", "Item 2", "Item 3"].map((text, index) => (
                <ListItem key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </AnimatedMiniDrawer>
        )}
      </AnimatePresence>
    </>
  );
}

export default AppSideBar;
