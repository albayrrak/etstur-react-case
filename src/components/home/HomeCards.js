import React from "react";
import "../../assets/cards.scss";
import { Link } from 'react-router-dom'
import formatDate from "../../utils.js/formatter";

const HomeCards = ({ data }) => {

    return (
        <div className='cards'>
            <div className='cards__images'>
                <Link to={`/dashboard/${data.id}`}>
                    <img
                        src={data.image[0]}
                        alt=''
                    />
                </Link >
            </div>
            <div className='cards__content'>
                <div className='cards__content__title'>
                    <h2>{data.name}</h2>
                    <h3>{data.category}</h3>
                </div>
                <div className='cards__content__info'>
                    <span>
                        <i class='fa-solid fa-calendar'></i>
                        <Link to={`/dashboard/${data.id}`}>{formatDate(data.date)}</Link>
                    </span>
                    <span>
                        <i class='fa-solid fa-location-dot'></i>
                        {data?.locations.map(item => (
                            <Link to={`/dashboard/${data.id}`}>{item.name}</Link>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HomeCards;
