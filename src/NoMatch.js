import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

export default function NoMatch() {
    return (
        <Jumbotron fluid>
                <Container>
                    <h1 style={{fontSize: '3rem'}}>UH OH!</h1>
                    <h3>
                    THIS PAGE DOES NOT EXIST.
                    </h3>
                </Container>
            </Jumbotron>
    )
}
