import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import MySpinner from './MySpinner'

const FortniteAPI = require("fortnite-api-io");
const fortniteAPI = new FortniteAPI("ef976a9b-a4686e4c-53d900e4-77767b89")

export default function Shop({ }) {

    const { id } = useParams();
    const history = useHistory()

    const [singleItem, setSingleItem] = useState([])
    const [image, setImage] = useState({})
    const [loading, setLoading] = useState(true)

    let classes = [];
        if (singleItem.rarity === 'rare') classes.push("single-rare");
        else if (singleItem.rarity === 'uncommon') classes.push("single-uncommon");
        else if (singleItem.rarity === 'epic') classes.push('single-epic');
        else if (singleItem.rarity === 'legendary') classes.push('single-legendary')
        else classes.push('standard')

    const fetchItem = async () => {
        const item = await fortniteAPI.getItemDetails(`${id}`);
        setSingleItem(item.item)
        console.log(item)
        console.log(item.item)
        setImage(item.item.images)
        setLoading(false)
    }

    useEffect(() => {
        fetchItem();
    }, [])

    if (loading) return <MySpinner />

    return (

        <div className='container my-5 d-flex justify-content-center'>
            <div className="card itemcard mb-3" style={{ maxWidth: 1000 }}>
                <div class="row ">
                    <div class='col-md-6'>
                        <div className={classes.join(" ")}>
                            <img src={image.icon} class="card-img" alt="..." />
                        </div>
                        
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h2 class="card-title">{singleItem.name}</h2>
                            <h5>{singleItem.price} V-BUCKS</h5>
                            <h5 class="card-text">{singleItem.description}</h5>
                            <h5 class="card-text">Item type: {singleItem.type}</h5>
                            <h5 class="card-text">Set: {singleItem.set}</h5>
                            <button style={{backgroundColor:'#0D7EC2', marginTop:'2.5rem'}} onClick= {() => history.goBack()}> RETURN TO SHOP </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
