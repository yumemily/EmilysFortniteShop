import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

export default function MySpinner() {
    return (
        <div>
            <Spinner animation="border"  
            style={{
            width: 200,
            height: 200,
            color: "rgb(47,210,218",
            marginTop: "40vh",
            marginLeft: "45vw"
          }}/>
        </div>
    )
}
