export default function hasExpired(data) {
    const hasExpiredEvent = data.filter(item => {
        const today = Date.now()
        const oldDate = new Date(item.date)

        return today > oldDate
    })
    return hasExpiredEvent
}