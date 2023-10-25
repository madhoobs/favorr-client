import { useState, useEffect } from 'react'
import { GetOrder } from '../services/Order'
import { useParams } from 'react-router-dom'

const Order = () => {
  const [order, setOrder] = useState('')
  let { orderid } = useParams()

  useEffect(() => {
    const handleOrder = async () => {
      const data = await GetOrder(orderid)
      setOrder(data)
    }
    handleOrder()
  }, [])
  return order.package ? (
    <div>
      <div key={order._id}>
        <h2>{order.status}</h2>
        <p>{order.package.price}</p>
        <p>{order.package.tier}</p>
        <p>{order.package.description}</p>
      </div>
    </div>
  ) : null
}

export default Order
