import React, { useContext } from 'react'
import "../../assets/cards.scss";
import EventsContext from '../../context/eventsContext';
import formatDate from '../../utils.js/formatter';
import { Link } from 'react-router-dom'
const DashboardCards = () => {
  const { events } = useContext(EventsContext)
  return (
    <>
      {events?.map((event, index) => (
        <div key={index} className='cards'>
          <div className='cards__images'>
            <img
              src={event.image[0]}
              alt=''
            />
          </div>
          <div className='cards__content'>
            <div className='cards__content__title'>
              <h2>{event.name}</h2>
              <h3>{event.category}</h3>
            </div>
            <div className='cards__content__info'>
              <span>
                <i class='fa-solid fa-calendar'></i>
                <h6>{formatDate(event.date)}</h6>
              </span>
              <span>
                <i class='fa-solid fa-location-dot'></i>
                {event.locations.map((location, index) => (

                  <h6 key={index}>{location.name}</h6>
                ))}
              </span>
              <Link to={`/dashboard/${event.id}`}><button>Etkinlik Detayları</button></Link>
            </div>
          </div>
        </div>
      ))}

    </>

  )
}

export default DashboardCards
