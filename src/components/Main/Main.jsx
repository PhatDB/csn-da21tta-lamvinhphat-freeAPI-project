import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const styled = {
    cardGrid: {
        padding: '20px 0',
    },
    card: {
        heigt: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
};

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Main = () => {
    return (
        <Container maxWidth='xl' sx={styled.cardGrid}>
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
                        <Card sx={styled.card}>
                            <CardMedia
                                sx={styled.cardMedia}
                                image='http://source.unsplash.com/random'
                                title='Image title'
                            />
                            <CardContent sx={styled.cardContent}>
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
