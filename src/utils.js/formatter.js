const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


export default function formatDate(date) {
    const currentDate = new Date(date)
    const format = new Intl.DateTimeFormat('tr', options).format(currentDate)
    return format
}

