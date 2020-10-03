import * as React from 'react';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import banner from '../../assets/banner.jpg';
import './Banner.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        link: {
            [theme.breakpoints.up('sm')]: {
                '&:focus, &:hover, &:visited, &:link, &:active': {
                    textDecoration: 'none',
                    position: 'absolute',
                    left: 0,
                    top: '65%',
                    right: 0,
                    zIndex: 1,
                },
            },
            [theme.breakpoints.down('sm')]: {
                '&:focus, &:hover, &:visited, &:link, &:active': {
                    textDecoration: 'none',
                    position: 'absolute',
                    left: 0,
                    top: '45%',
                    right: 0,
                    zIndex: 1,
                },
            },
        },
    })
);

const Banner = () => {
    const classes = useStyles();
    return (
        <div className="banner">
            <img src={banner} />
            <h2>Apartment for rent </h2>
            <p>
                An Excellent place for people who are looking for quality living in Ho chi minh city
            </p>
            <Link href="/inspection" className={classes.link}>
                <Button color="primary" variant="contained">
                    {' '}
                    Book Inspection
                </Button>
            </Link>
        </div>
    );
};

export { Banner };
