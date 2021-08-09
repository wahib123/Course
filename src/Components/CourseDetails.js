import { Container } from '@material-ui/core'
import React from 'react'
import { useLocation } from 'react-router-dom'
import './style.css'
import {Row, Col} from 'react-bootstrap'
export const CourseDetails = () => {
    const {state} = useLocation()
    return (
        <React.Fragment>
        <Container className="bannerDetails">
            <div className="headingCol">
            <Row>
                <Col md={7} sm={6}>
                <h3>{state.cards.title}</h3>
                <p>{state.cards.brief}</p>
                <span>Created By {state.cards.author}</span>
                </Col>
                <Col md={5} sm={5}>
                    <img src={state.cards.img} alt="img"/>
                </Col>
            </Row>
            </div>
        </Container>
        <Container className="courseDetails">
            <h2>What you'll learn?</h2>
            <ul>
            {state.cards.desc.whatYouLearn.map((desc, idx) => {
                return(<li key={idx}>{desc}</li>)
            })}
            </ul>
            
        </Container>
        <Container className="courseDescription">
            <h2>Description</h2>
            <span>{state.cards.desc.description.split(".").map((i, id) => {
                return(<li key={id}>{i}</li>)
            })}</span>
            
        </Container>
        </React.Fragment>
    )
}
