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
  BoxProps,
  Box,
  Paper,
  ListItemIcon,
  ListItemProps,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { AnimatePresence, motion } from "framer-motion";
import ArticleIcon from "@mui/icons-material/Article";
const drawerWidth = 240;

interface MiniDrawerProps {
  open: boolean;
}
function AppSideBar() {
  const [selected, setSelected] = useState(0);

  const StyledListItem = styled(ListItem)<ListItemProps>(({ theme }) => ({
    "&.Mui-selected": {
      backgroundColor: "#C1E3F7",
    },
  }));

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255,255,255, 0.7)",
        }}
      >
        <List sx={{ color: "#848484" }}>
          <ListItem>
            <img src="OpenPIM-logo.svg" alt="" />
          </ListItem>
          {["アクティビティー", "商品一覧", "商品状況", "設定"].map(
            (element, index) => (
              <>
                <StyledListItem
                  key={index}
                  selected={selected === index}
                  onClick={() => setSelected(index)}
                  sx={{ flexDirection: "column" }}
                >
                  <ArticleIcon></ArticleIcon>
                  <div style={{ fontSize: "0.5rem" }}>{element}</div>
                </StyledListItem>
              </>
            )
          )}
        </List>
      </Paper>
    </>
  );
}

export default AppSideBar;
