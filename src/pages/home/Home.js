import React, { useContext } from 'react'
import "../../assets/home/home.scss"
import FirebaseContext from '../../context/firebaseContex'
import Slider from "../../components/home/Swiper"
import { Link } from 'react-router-dom'



const Home = () => {

    const { user } = useContext(FirebaseContext)

    return (
        <div className='home'>
            <div className='header'>
                <div className='header__container'>
                    <h1>Metropol  Event</h1>
                    <h4>Türkiye'deki bütün aktivitelerden haberdar olun</h4>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <div className='home__container'>
                <div className='home__container__slider'>
                    <Slider />
                </div>
                <div className='home__container__footer'>
                    {user ? <h6>Hoşgeldiniz: <span>{user.email}</span>   </h6> : <Link to="/login"> <h6>Aktivite detaylarını öğrenmek için giriş yapınız</h6></Link>}
                    <Link to="/dashboard">  <button>Etkinlik takvimimize ulaşmak için tıklayın</button></Link>
                </div>
            </div>

        </div>
    )
}

export default Home