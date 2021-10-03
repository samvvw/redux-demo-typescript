import './style.scss'
import style from './stile.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { incremented, decremented, RootState } from './redux/store'

function App(): JSX.Element {
    const count = useSelector((state: RootState) => state.value)
    const dispatch = useDispatch()
    return (
        <div className={style.classTest}>
            <h1>Welcome to Coffee Connect by Javalimos the best team ever</h1>
            <h3>Count:</h3>
            <p>{count}</p>
            <button onClick={() => dispatch(incremented())}>Increment</button>
            <button onClick={() => dispatch(decremented())}>Decrement</button>
        </div>
    )
}

export default App
