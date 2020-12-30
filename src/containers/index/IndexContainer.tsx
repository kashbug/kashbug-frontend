// mui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Slider from '../../components/slider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        marginTop: '60px',
    }
  }),
);

const IndexContainer = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            body
        </div>
    );
};

export default IndexContainer;