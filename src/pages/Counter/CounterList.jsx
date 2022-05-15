import CounterItem from "./CounterItem"

const counterList = ({ counters }) => {
  ;<ul className='counter-list'>
    {counters.map((counter) => (
      <CounterItem value={counter.value} key={counter.id} />
    ))}
  </ul>
}

export default counterList
