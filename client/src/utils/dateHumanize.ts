import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(duration)
dayjs.extend(relativeTime)

const dateHumanize = (date: string) =>
  dayjs.duration(dayjs(date).diff(dayjs())).humanize(true)

export default dateHumanize
