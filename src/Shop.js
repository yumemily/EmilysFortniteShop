import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Jumbotron, Container } from 'react-bootstrap'
import MySpinner from './MySpinner'

export default function Shop() {
    const FortniteAPI = require("fortnite-api-io");
    const fortniteAPI = new FortniteAPI("ef976a9b-a4686e4c-53d900e4-77767b89")
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchItems = async () => {
        const upcomingItems = await fortniteAPI.listUpcomingItems();
        setItems(upcomingItems.items)
        setLoading(false)
        console.log(upcomingItems.items)
    }

    useEffect(() => {
        fetchItems();
    }, [])


    const itemHtml = items.map((item) => {
        let classes = [];
        if (item.rarity === 'rare') classes.push("rare");
        else if (item.rarity === 'uncommon') classes.push("uncommon");
        else if (item.rarity === 'epic') classes.push('epic');
        else if (item.rarity === 'common') classes.push('common')
        else if (item.rarity === 'legendary') classes.push('legendary')
        else classes.push('standard')

        return (
            <Card className={classes.join(" ")} >
                <Card.Title className='p-3'>
                    <img style={{ width: '2rem', paddingRight: '.5rem' }} src='https://fortnite-public-files.theapinetwork.com/fortnite-vbucks-icon.png' />
                    {item.price}
                </Card.Title>
                <Card.Img className='p-2' variant="top" src={item.images.icon} />
                <Card.Footer className='cardfooter'><Link className='stretched-link' to={`/shop/${item.id}`}>{item.name}</Link></Card.Footer>
            </Card>
        )
    })

    if (loading) return (
        < MySpinner />
    )

    return (
        <div className='mb-5'>
            <Jumbotron fluid>
                <Container className='shop-description'>
                    <h1 style={{fontSize: '3rem'}}>FORTNITE ITEM SHOP</h1>
                    <h3>
                    Check out all of the Fortnite skins and other cosmetics 
                    available in the Fortnite Item shop today.
                    When clicking on a skin or any other cosmetic, you’ll find the 
                    official description, price, item type, and item set.
                    </h3>
                </Container>
            </Jumbotron>
            <div className='store-heading-one'>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SI EST NIHIL NISI CORPUS, SUMMA ERUNT ILLA</div>
            <div className='store-heading-two'>CURRENT STORE</div>
            <div className='container'>
                <Row style={{ justifyContent: 'space-around' }}>{itemHtml}</Row>
            </div>
        </div>
    )
}

