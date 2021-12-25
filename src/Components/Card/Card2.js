import React from 'react'
import { useState } from 'react';
import Card3 from './Card3';
import Styles from './cardStyle.module.css'
import { FoodMenu } from '../JSONData/FoodMenu';

const Card2 = () => {
    const [availability, useAvailability] = useState(5);
    const [imageprops, setImageprops] = useState();
    const [cardClicked, setCardClicked] = useState(false);
    const [checked, setChecked] = useState(true);
    if (availability === 0) {
        setImageprops("filter: grayscale(1)")
    }
    const handleCardClick = () => {
        setCardClicked(!cardClicked);
    }
    return (
        <div className={Styles.entireBody}>
            {FoodMenu.map((data)=>{
                return(
                <section className='mt-2'>
                <Card3 imgsrc = {data.ImgSrc} title = {data.Title} price = {data.Price} imageStyle = {data.Stocks === 0? ("filter: grayscale(1)"):("")}/>
                </section>
            )})}
            {/* <Card3 imgsrc="https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__1200_0_0_0_auto.jpg" title="Chicken biryani" price="70" imageStyle="filter: grayscale(1)" onClick={handleCardClick} href='https://create-react-app.dev/docs/proxying-api-requests-in-development/' />
            <Card3 imgsrc="https://www.whiskaffair.com/wp-content/uploads/2020/08/Veg-Biryani-2-2.jpg" title="Veg biryani" price="50" imageStyle={imageprops} />
            <Card3 imgsrc="https://c.ndtvimg.com/2019-02/45dlkeqo_mutton-biryani_625x300_27_February_19.jpg" title="Mutton biryani" price="90" imageStyle={imageprops} /> */}
        </div>
    )
}

export default Card2
