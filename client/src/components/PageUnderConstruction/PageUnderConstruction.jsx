import { Box, Typography } from "@mui/material";

const PageUnderConstruction = () => {
  return (
    <Box p={5}>
      <Typography textAlign="center" fontSize={30}>
        Website Under Construction
      </Typography>
      <Box p={10} m="auto" width="fit-content">
        <img
          style={{ maxWidth: 600 }}
          src="https://res.cloudinary.com/fe-advjs-final-project-3/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1663947106/imgbin_construction-website-portable-network-graphics-png_seodbj.jpg"
          alt="website in progress"
        />
      </Box>
    </Box>
  );
};

export default PageUnderConstruction;
