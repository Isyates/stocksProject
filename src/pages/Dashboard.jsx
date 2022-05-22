import stocks from '../components/stock-data'
import {Link} from 'react-router-dom'


export default function Dashboard (){
    
    return(
    <div className = 'stocks'>
        <h2>Name |  Ticker Symbol  | Price</h2>
        {stocks.map(({name,lastPrice,change,symbol}) =>
            <Link to={`/stocks/${symbol}`}>
                <div className='individual'><h2>{name} | {symbol} | {lastPrice}</h2></div>
            </Link>
        )}
    </div>
    )
    }