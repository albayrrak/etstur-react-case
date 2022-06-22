import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'
import filterWithDate from '../utils.js/filterDate'
import hasExpired from "../utils.js/hasExpired";

const EventsContext = createContext()


export const EventProvider = ({ children }) => {

    const [query, setQuery] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndtDate] = useState('')
    const [events, setEvents] = useState([])
    const [oldEvent, setOldEvent] = useState([])

    // Backendden gelen bütün responselar
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // Api'den gelen bütün eventler ve  searchbar için çekilen response
                const res = await axios.get(`http://localhost:5000?q=${query}`)
                setEvents(res.data)
                if (startDate && endDate !== null) {
                    setEvents(filterWithDate(res.data, startDate, endDate))
                }

                //Tarihi geçmiş eventler için çekilen data 
                setOldEvent(hasExpired(res.data))

            } catch (error) {
                console.log(error);
            }
        }
        fetchEvents()
    }, [query, startDate, endDate])





    return (

        <EventsContext.Provider value={{ oldEvent, events, query, setQuery, startDate, setStartDate, endDate, setEndtDate }}>
            {children}
        </EventsContext.Provider>
    )
}

export default EventsContext