export default function filterWithDate(data, startDate, endDate) {
    const resultEvent = data.filter(item => {
        const fromDate = new Date(startDate)
        const toDate = new Date(endDate)
        const currentDate = new Date(item.date)
        return currentDate >= fromDate && currentDate <= toDate
    })
    return resultEvent
}