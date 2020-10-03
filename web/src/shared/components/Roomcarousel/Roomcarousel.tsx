import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Carousel from 'react-multi-carousel';
import CarouselCard from '../Card/CarouselCard';
import 'react-multi-carousel/lib/styles.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
            backgroundColor: '#02203c',
            padding: '30px 0px',
        },
        title: {
            maxWidth: 400,
            margin: 'auto',
            marginTop: 10,
        },
    })
);

const Roomcarousel = () => {
    const isMoving = useState<boolean>(false);

    const classes = useStyles();
    const imgUrls = [
        'https://my-blog-1996.s3-ap-southeast-2.amazonaws.com/image/banner.jpg',
        'https://my-blog-1996.s3-ap-southeast-2.amazonaws.com/image/banner.jpg',
        'https://my-blog-1996.s3-ap-southeast-2.amazonaws.com/image/banner.jpg',
        'https://my-blog-1996.s3-ap-southeast-2.amazonaws.com/image/banner.jpg',
        'https://my-blog-1996.s3-ap-southeast-2.amazonaws.com/image/banner.jpg',
    ];

    const texts = ['Bedroom', 'Kitchen', 'Bath', 'Communal Area', 'Communal Area'];

    const fakerData = Array(5)
        .fill(0)
        .map((item, index) => {
            return {
                imgUrl: imgUrls[index],
                headline: 'w3js -> web front-end studio',
                description: texts[index] || texts[0],
            };
        });
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        // <div>
        <section className={classes.root}>
            <Carousel
                // swipeable={true}
                // draggable={true}
                responsive={responsive}
                ssr
                // showDots
                infinite
                containerClass="container-with-dots"
                itemClass="image-item"
                // deviceType={this.props.deviceType}
            >
                {fakerData.slice(0, 5).map((card, index) => {
                    return <CarouselCard key={index} isMoving={isMoving} {...card} />;
                })}
            </Carousel>
        </section>
        // </div>
    );
};

export { Roomcarousel };

// export { Roomcarousel };
