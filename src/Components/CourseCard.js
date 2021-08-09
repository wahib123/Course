import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button } from 'react-bootstrap'
import cards from './CourseData'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    cardHeading: {
        fontSize: "1.1rem",
        fontWeight: "700"
    },
    cardDesc: {
        fontSize: "0.9rem",
        color: "grey"
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export function CourseCard(){
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={card.img}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography className={classes.cardHeading} gutterBottom variant="h6">
                                    {card.title}
                                </Typography>
                                <Typography className={classes.cardDesc}>
                                    {card.author}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={{
                                    pathname: "/courseDetail",
                                    state: {
                                        "cards":card
                                    },
                                }}><Button variant="outline-success">Course Details</Button></Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
