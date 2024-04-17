'use client'

import React from 'react';
import { Card, CardMedia } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

export default function CarouselComponent() {
    return (
        <>
            <Carousel autoPlay={true} sx={{ width: '100%' }} indicators={false}>
                <Card sx={{ width: '100%' }}>
                    <CardMedia
                        component="img"
                        sx={{ height: '340px', objectFit: 'cover' }}
                        image="https://source.unsplash.com/random?a=1"
                    />
                </Card>
                <Card sx={{ width: '100%' }}>
                    <CardMedia
                        component="img"
                        sx={{ height: '340px', objectFit: 'cover' }}
                        image="https://source.unsplash.com/random?a=2"
                    />
                </Card>
                <Card sx={{ width: '100%' }}>
                    <CardMedia
                        component="img"
                        sx={{ height: '340px', objectFit: 'cover' }}
                        image="https://source.unsplash.com/random?a=3"
                    />
                </Card>
                <Card sx={{ width: '100%' }}>
                    <CardMedia
                        component="img"
                        sx={{ height: '340px', objectFit: 'cover' }}
                        image="https://source.unsplash.com/random?a=4"
                    />
                </Card>
            </Carousel>
        </>
    );
}
