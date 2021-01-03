
import styled from 'styled-components';
// mui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const ItemWrap = styled.div`
    display: inline-block;
    padding: 8px;
`;
const Logo = styled.div`
    display: flex;
    padding: 8px;
    width: 200px;
    height: 200px;
    align-items: flex-end;
    justify-content: flex-end;
    background-image: url(${props => props.url});
    border-radius: 16px;
`;
const TemporaryLogo = styled.div`
    display: flex;
    padding: 8px;
    width: 200px;
    height: 200px;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: #491651;
    border-radius: 16px;
`;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        closingDate: {
            color: '#000000',
            fontWeight: 500,
            textShadow: '-1px 0 #ffffff, 0 1px #ffffff, 1px 0 #ffffff, 0 -1px #ffffff'
        },
        projectName: {
            display: 'flex',
            justifyContent: 'center',
            padding: '8px 0',
        },
    }),
);

const CategoryItem = ({...props}) => {
    const classes = useStyles();
    return (
        <>
            <ItemWrap>
                <TemporaryLogo>
                    <Typography variant="body2" component="p" className={classes.closingDate}>
                    {props.closingDate}
                    </Typography>
                </TemporaryLogo>
                {/* <Logo url={props.projectLogo}>
                    <Typography variant="body2" component="p" className={classes.closingDate}>
                    {props.closingDate}
                    </Typography>
                </Logo> */}
                <Typography variant="body1" component="p" className={classes.projectName}>
                {props.projectName}
                </Typography>
            </ItemWrap>
        </>
    );
};

export default CategoryItem;