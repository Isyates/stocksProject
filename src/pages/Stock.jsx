
import { useParams } from "react-router-dom"
import stocks from '../components/stock-data'

export default function Stock  (){

    const {symbol} = useParams()
    
    const filteredStock = stocks.find(function(indiStock){
        return indiStock.symbol === `${symbol}`
    })

    return(
    <>
    <h1> Ticker Symbol</h1><h2>{filteredStock.symbol}</h2>
    <h1>Name</h1><h2>{filteredStock.name}</h2>
    <h1>Current Price</h1><h2>${filteredStock.lastPrice}</h2>
    <h1>High | Low</h1><h2>${filteredStock.high} | ${filteredStock.low}</h2>
    <h1>Opening Price</h1><h2>${filteredStock.open}</h2>
    <h1>Change</h1><h2>{filteredStock.change}%</h2>
    </>
    )
    }