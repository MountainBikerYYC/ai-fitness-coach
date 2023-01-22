import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const ref = React.useRef(null);

  const onOpen = () => {
    window.open("https://github.com/MountainBikerYYC");
  };

  const onOpenLinkedIn = () => {
    window.open("https://www.linkedin.com/in/yuekai-wang-07b129140/");
  };

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation showLabels sx={{ backgroundColor: "#1976d2" }}>
          <BottomNavigationAction
            label="Github"
            icon={<GitHubIcon />}
            onClick={() => onOpen()}
            sx={{ color: "white" }}
          />
          <BottomNavigationAction
            label="LinkedIn"
            icon={<LinkedInIcon />}
            onClick={() => onOpenLinkedIn()}
            sx={{ color: "white" }}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Footer;
