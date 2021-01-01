import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const NotFound = () => {
    const useStyles = makeStyles({
        centerWrap: {
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        
    });
    const classes = useStyles();

    return (
        <>
            <div className={classes.centerWrap}>
                <Typography variant="h4" component="p">
                SORRY, PAGE NOT FOUND
                </Typography>
            </div>
        </>
    );
};

export default NotFound;