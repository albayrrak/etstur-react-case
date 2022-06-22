import React, { useState, useEffect, useContext } from 'react'
import '../../assets/dashboard/dashboard_detail.scss'

import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon } from "react-share";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import EventsContext from '../../context/eventsContext';


const DashboardDetail = () => {
  const { id } = useParams()
  const { events } = useContext(EventsContext)



  const [event, setEvent] = useState(null)
  const [error, setError] = useState(false)
  const [openModal, setOpenModal] = useState(false)




  useEffect(() => {
    const getEvent = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/${id}`)
        setEvent(res.data)
        setError(false)
      } catch (error) {
        setError(true)
      }
    }

    getEvent()
  }, [id])


  const lat = event?.locations.find(location => location.lat)

  const containerStyle = {
    width: '1000px',
    marginTop: "15px",
    height: '200px'
  };

  const center = {
    lat: lat?.lat,
    lng: lat?.lng
  };


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })


  return (
    <div className='detail'>
      <div className='detail__box'>
        <div className='detail__box__slide'>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

            {event?.image.map((image, index) => (
              <SwiperSlide key={index}> <img src={image} alt=''></img> </SwiperSlide>
            ))}

          </Swiper>
        </div>
        <div className='detail__box__content'>
          <h1>
            {event?.name}
          </h1>
          <p>
            {event?.desc}
          </p>
          <div className='detail__box__content__info'>
            <div className='detail__box__content__info__date'>
              <i className='fa-solid fa-calendar'> <span>Tarih ve Zaman</span> </i>
              <h6>{event?.date}</h6>
            </div>
            <div className='detail__box__content__info__category'>
              <i className='fa-solid fa-calendar'> <span>Etkinlik Türü</span> </i>
              <h6>{event?.category}</h6>
            </div>
            <div className='detail__box__content__info__location'>
              <i onClick={() => setOpenModal(!openModal)} className='fa-solid fa-calendar'> <span>Etkinlik Yeri</span> </i>
              <h6 >{lat?.name}</h6>
            </div>
            <div className='detail__box__content__info__media'>
              <i className='fa-solid fa-calendar'> <span> Paylaş</span> </i>
              <button>
                <TwitterShareButton
                  url={"#coin"}
                  title={event?.image[0]}

                  className='Demo__some-network__share-button'
                >
                  <TwitterIcon size={20} style={{ marginRight: '5px' }} round={false} />
                </TwitterShareButton>
                <FacebookShareButton
                  url={event?.name}
                  quote={event?.image[0]}
                  hashtag={event?.name}
                >
                  <FacebookIcon size={20} round={false} />
                </FacebookShareButton>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isLoaded &&
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={center} />
        </GoogleMap>
      }

      <div className={openModal ? "detail__modal active" : "detail__modal"}>
        <div className='detail__modal__container'>
          <h1>Mekandaki diğer eventler</h1>
          <ul>
            <li>h6</li>
          </ul>
        </div>
      </div>

    </div>
  )

}

export default React.memo(DashboardDetail)