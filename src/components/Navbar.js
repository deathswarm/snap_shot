import { AppBar, makeStyles, Toolbar, Typography, Box } from '@material-ui/core';
import CollectionsIcon from '@material-ui/icons/Collections';

const useStyles = makeStyles({
    component: {
        background: '#121212'
    }
})

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.component} position='static'>
            <Toolbar style={{ justifyContent: "space-between" }}>
                <Box style={{ display: "flex" }}>
                    <CollectionsIcon></CollectionsIcon>
                    <Typography variant='h5' style={{ marginLeft: 10 }}>Snap Shot</Typography>
                </Box>
                <Box>
                    <Typography style={{ marginRight: 10, fontSize: 10 }}>Powered By Pixabay</Typography>
                    <Typography style={{ marginRight: 10, fontSize: 10, textAlign: "right" }}>Dhrubojyoti</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;