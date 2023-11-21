import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Main = () => {
    return (
        <Container maxWidth='xl' sx={{ padding: '20px 0' }}>
            <Grid container sx={{ marginBottom: '1rem' }} spacing={2} justifyContent='center'>
                <Grid item>
                    <Button variant='outline' color='primary'>
                        Places
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant='outline' color='primary'>
                        Hotels
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant='outline' color='primary'>
                        restaurants
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card} xs={12} md={3}>
                        <Card sx={{ heigt: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                sx={{ paddingTop: '56.25%' }}
                                image='http://source.unsplash.com/random'
                                title='Image title'
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant='h5' gutterBottom>
                                    Heading
                                </Typography>
                                <Typography>This is a media card</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    View
                                </Button>
                                <Button size='small' color='primary'>
                                    Edit
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Main;
