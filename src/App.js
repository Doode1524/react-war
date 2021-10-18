import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getDeck} from './actions'

function App() {
  const dispatch = useDispatch()
  const deck = useSelector(state => state.deck)
  
  useEffect(() => {
    dispatch(getDeck())
  }, [])
  
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
