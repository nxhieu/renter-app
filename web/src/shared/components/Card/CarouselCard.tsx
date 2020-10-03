import * as React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            margin: '0 20px',
        },
        media: {
            height: 200,
        },
    })
);

interface Props {
    isMoving: boolean;
    imgUrl: string;
    description: string;
    headline: string;
}

const CarouselCard = (props: Props) => {
    const { imgUrl, headline, description, isMoving } = props;

    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image={imgUrl} title={headline} />
                <CardContent>
                    <Typography component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CarouselCard;
