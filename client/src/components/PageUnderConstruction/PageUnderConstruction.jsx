import { Box, Typography } from "@mui/material";

const PageUnderConstruction = () => {
  return (
    <Box p={5}>
      <Typography textAlign="center" fontSize={30}>
        Website Under Construction
      </Typography>
      <Box pt={10} m="auto" width="fit-content">
        <Box
          component="img"
          sx={{ width: { mobile: 280, desktop: 500 } }}
          src="https://res.cloudinary.com/fe-advjs-final-project-3/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1663947106/imgbin_construction-website-portable-network-graphics-png_seodbj.jpg"
          alt="website in progress"
        />
      </Box>
    </Box>
  );
};

export default PageUnderConstruction;
