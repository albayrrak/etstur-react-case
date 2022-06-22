import React, { useContext } from 'react'

// Context Import
import FirebaseContext from '../../context/firebaseContex'
import EventsContext from '../../context/eventsContext'


// Styles Import
import '../../assets/dashboard/dashboard.scss'

// Components Import
import DashboardCards from '../../components/dashboard/DashboardCards'
import OldCards from '../../components/dashboard/OldCards'

const Dashboard = () => {

    const { signout } = useContext(FirebaseContext)
    const { query, setQuery, startDate, setStartDate, endDate, setEndtDate } = useContext(EventsContext)

    return (
        <div className='dashboard'>
            <div className='dashboard__header'>
                <div className='dashboard__header__container'>
                    <div className='dashboard__header__container__logo'>
                        <h6>Metropol Event</h6>
                    </div>
                    <div className='dashboard__header__container__search'>
                        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Searching...' />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className='dashboard__header__container__button'>
                        <button className='signout__button' onClick={signout}>
                            <i class="fa-solid fa-right-from-bracket"></i>
                            Çıkış yap
                        </button>
                        <button className='signout__image__button' onClick={signout}>
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </button>
                    </div>
                </div>
                <div className='dashboard__header__date'>
                    <label htmlFor='from'>
                        <h6>From:</h6>
                        <input value={startDate} onChange={(e) => setStartDate(e.target.value)} type="date" id='from' ></input>
                    </label>
                    <label htmlFor='to'>
                        <h6>To:</h6>
                        <input value={endDate} onChange={(e) => setEndtDate(e.target.value)} type="date" id='to' ></input>
                    </label>
                </div>
            </div>
            <div className='dashboard__content'>
                <div className='dashboard__content__container'>
                    <DashboardCards />
                </div>
            </div>
            <div className='old__event'>
                <div className='old__event__container'>
                    <h1>Kaçırmış olduklarınız</h1>
                    <OldCards />
                </div>
            </div>
        </div>
    )
}

export default React.memo(Dashboard)