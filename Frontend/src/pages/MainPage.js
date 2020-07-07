import React from 'react'
import Carousel from "react-material-ui-carousel";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop:20
    },
    media: {
        height: 720,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

function Item(props) {
    const classes = useStyles();
    const handleClick = () => {
        console.log("CLICK")
    }
    return (
        <Grid>
            <Card>
                {/*<img src={path}/>*/}
                <CardMedia
                    className={classes.media}
                    component="img"
                    image={props.props}
                    title="me"
                    onClick={handleClick}
                >

                </CardMedia>
            </Card>
        </Grid>
    )
}

export const MainPage = () => {


    const classes = useStyles();
    const images = [
        "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/21/2018/07/fruitveg.jpeg",
        "https://www.heart.org/-/media/aha/h4gm/article-images/fruit-and-vegetables.jpg?la=en&hash=65387BD7AEEF9C37F30838E6A897796400EE80F4",
        "https://azernews.az/media/pictures/o-GROCERY-SHOPPING-TIP-VEGETABLE-VEGETABLES-HEALTHY-facebook.jpg"
    ]

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    console.log(images)
    return (
        <Grid className={classes.root} container>
            <Grid item xs={2}/>
            <Grid item xs={8}>
                <Carousel>
                    {
                        images.map((src) => <Item props={src}/>)
                    }
                </Carousel>
            </Grid>
            <Grid item xs={2}/>
        </Grid>
    )
}