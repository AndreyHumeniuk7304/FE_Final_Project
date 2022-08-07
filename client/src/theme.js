import {createTheme} from '@material-ui/core';
 const theme = createTheme({
    pallete: {
        primary: {
            light: '#FFFFFF',
            main: '#847A7A',
            dark: '#000000'

        },
        secondary: {
            light: '#E2DFDF',
            main: '#847A7A',
            dark: '#595959'

        }
    },
    typography: {
        fontFamily: [
            'Josefin Sans',
            'Open Sans',
        ].join(','),
    }
})

export default theme