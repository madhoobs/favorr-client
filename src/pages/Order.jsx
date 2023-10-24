import { useState, useEffect } from 'react'
import { GetOrderByUser } from '../services/Order'

const Order = ({ Package }) => {
  const [orders, setOrder] = useState([])

  useEffect(() => {
    const handleFavors = async () => {
      const data = await GetOrderByUser()
      setOrder(data)
    }
    handleFavors()
  }, [])

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>
          <h2>{order.price}</h2>
          
          <p>{order.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Order
