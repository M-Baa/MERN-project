import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import AddedItems from './AddedItems';
import chair from '../images/chair.jpg';
import headphones from '../images/headphones.jpg';
import keyboard from '../images/keyboard.jpg'; 
import smartphone from '../images/mouse.jpg'; 
import camera from '../images/camera.jpg'; 
import deskLamp from '../images/desklamp.jpg'; 
import  '../assets/css/style/product.css'


function ProductListings(props) {
    const navigate = useNavigate();
    const {cartItems, setCartItems} = props;

    const handleAddToCart = (productName) => {
        console.log('Adding', productName, 'to cart');
        const newItem = { name: productName, quantity: 1 };
        const itemIndex = cartItems.findIndex(item => item.name === productName);

        if (itemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex].quantity++;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, newItem]);
        }
        navigate('/cart');
    };

    return (
        
        <section className="product-listings" >
            <Typography variant="h2">Our marketplace</Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={chair}
                                alt="Product 1"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Chair
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Comfortable chair for your home or office.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Button  style ={{width:"100%"}}onClick={() => handleAddToCart('Chair')} variant="contained" color="primary">
                            Add to Cart
                        </Button>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={headphones}
                                alt="Product 2"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Headphones
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    High-quality headphones for an immersive audio experience.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Button style ={{width:"100%"}} onClick={() => handleAddToCart('Headphones')} variant="contained" color="primary">
                            Add to Cart
                        </Button>
                    </Card>
                </Grid>

                {/* New Product 1 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={keyboard}
                                alt="Product 3"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Keyboard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Powerful laptop for work and entertainment.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Button style ={{width:"100%"}} onClick={() => handleAddToCart('Laptop')} variant="contained" color="primary">
                            Add to Cart
                        </Button>
                    </Card>
                </Grid>

                {/* New Product 2 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={smartphone}
                                alt="Product 4"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Gaming mouse
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Sleek smartphone with advanced features.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Button style ={{width:"100%", backgroundColor:"charcoal"}} onClick={() => handleAddToCart('Smartphone')} variant="contained" color="primary">
                            Add to Cart
                        </Button>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
    <Card>
        <CardActionArea>
            <CardMedia
                component="img"
                height="200"
                image={camera}
                alt="Product 5"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Streaming camera
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Professional camera for capturing memorable moments.
                </Typography>
            </CardContent>
        </CardActionArea>
        <Button style ={{width:"100%"}} onClick={() => handleAddToCart('Camera')} variant="contained" color="primary">
            Add to Cart
        </Button>
    </Card>
</Grid>
            {/* another */}
            <Grid item xs={12} sm={6} md={4}>
    <Card>
        <CardActionArea>
            <CardMedia
                component="img"
                height="200"
                image={deskLamp}
                alt="Product 6"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Desk Lamp
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Adjustable desk lamp for comfortable workspace lighting.
                </Typography>
            </CardContent>
        </CardActionArea>
        <Button  style ={{width:"100%"}} onClick={() => handleAddToCart('Desk Lamp')} variant="contained" color="primary">
            Add to Cart
        </Button>
    </Card>
</Grid>
            </Grid>
            
            



        </section>
    );
}

export default ProductListings;
