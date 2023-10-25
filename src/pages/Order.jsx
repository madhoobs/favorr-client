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
    <div className="container" style={{ padding: '50px 0 50px 0' }}>
      <h1 style={{ textAlign: 'center' }}>Order Checkout</h1>
      <br />
      <div key={order._id}>
        <h4>
          <b>Package Tier:</b> {order.package.tier}
        </h4>
        <h4>
          <b>Description:</b> {order.package.description}
        </h4>
        <h2>
          <b>Total price:</b> ${order.package.price}
        </h2>
        <button className="btn btn-warning">Proceed to Checkout</button>
      </div>
    </div>
  ) : null
}

export default Order
