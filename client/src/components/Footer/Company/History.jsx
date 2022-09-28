import { Box, Typography } from "@mui/material";

const HistoryOfBrand = () => {
  return (
    <Box p={{ mobile: 1, desktop: 5 }}>
      <Box
        component="h5"
        textTransform="uppercase"
        textAlign="center"
        p={4}
        fontWeight="bold"
        fontSize={20}
      >
        History of brand
      </Box>
      <Typography pb={3}>
        Clocks are interesting devices, they are made in many different ways,
        from mechanical, to digital, and atomic. I will explain how each type of
        clock is different, how it keeps time, and why this method it used over
        others.
      </Typography>
      <Typography pb={3}>
        First lets look at how clocks came to be. The first clocks had been
        Shadow clocks made first by the Egyptians and Sundials made by the
        Greeks as well as many others. They used this to mark the hours of the
        day. Simply by using the shadow the sun cast on the clock would indicate
        the proximate time. This of course only worked to the nearest hour.
        Another big flaw in these types of sun powered clocks is in it self,
        just that. They do not work at night!
      </Typography>
      <Box width="fit-content" m="auto">
        <Box
          component="img"
          sx={{ width: { mobile: 240, desktop: 400 } }}
          src="https://revolutionwatch.imgix.net/wp-content/uploads/2022/03/29-jacob-arabo-scaled.jpg?ixlib=js-v3.1.3&w=1500&h=1000&fit=crop&auto=format&s=160a588bc525b90d6a7009588ee821fc"
          alt="clock"
        />
      </Box>

      <Typography pb={3}>
        The next clock to be invented was the Clepsydra, also known as a water
        clock. Using a very large bucket and filling it with water, a tiny hole
        was cut in the bottom the let water pass out. Every hour was marked with
        a line as it passed. Once this was done, the clock could be set and the
        time could be kept. Over time, a flaw was found in this clock as well.
        Water flows at different speeds depending on the temperature. It would
        freeze in the cold, as well as evaporate when it was hot. Then there was
        a solution, the Hourglass, or Sand clock was created.
      </Typography>
    </Box>
  );
};

export default HistoryOfBrand;
