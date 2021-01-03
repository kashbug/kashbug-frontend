import React, { useState } from 'react';

// mui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CategoryItem from '../../components/index/CategoryItem';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: '60px',
        }
    }),
);

const IndexContainer = () => {
    const [indexItems, setIndexItems] = useState([
        {idx: 0, projectLogo: '../#', projectName: '야구게임', price: 30000, closingDate: '2021-12-31'},
        {idx: 1, projectLogo: '../#', projectName: '축구게임', price: 20000, closingDate: '2021-12-30'},
        {idx: 2, projectLogo: '../#', projectName: '배구게임', price: 10000, closingDate: '2021-12-29'},
        {idx: 3, projectLogo: '../#', projectName: '농구게임', price: 20000, closingDate: '2021-12-28'},
    ]);

    const classes = useStyles();
    return (
        <div className={classes.container}>
            {indexItems.map((row, index) =>
                <CategoryItem key={index} projectLogo={row.projectLogo} projectName={row.projectName} price={row.price} closingDate={row.closingDate} />
            )}
        </div>
    );
};

export default IndexContainer;