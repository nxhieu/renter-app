import * as React from 'react';
import banner from '../../assets/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic doloribus reiciendis
                commodi. Aliquam, perferendis. Voluptatem provident nihil voluptas quae, veniam odit
                quibusdam repellat rerum modi harum sapiente voluptates reprehenderit voluptatum!
            </p>
        </div>
    );
};

export { Banner };
