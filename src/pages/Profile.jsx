import { useState, useEffect } from 'react'
import { ViewProfile } from '../services/Auth'
import { GetFavorByUser } from '../services/Favor'
import { GetOrderByUser } from '../services/Order'
import { Link, useParams, useNavigate } from 'react-router-dom'
import FavorCard from '../components/FavorCard'

const Profile = ({ user }) => {
  const [profile, setProfile] = useState('')
  const [favors, setFavors] = useState([])
  const [orders, setOrders] = useState([])
  const [comments, setComments] = useState([])
  let { username } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    const handleProfile = async () => {
      const fetchProfile = await ViewProfile(username)
      setProfile(fetchProfile)
      if (profile._id) {
        const handleFavors = async () => {
          const fetchFavors = await GetFavorByUser(profile._id)
          setFavors(fetchFavors)
        }
        handleFavors()
        const handleOrders = async () => {
          const fetchOrders = await GetOrderByUser(profile._id)
          setOrders(fetchOrders)
        }
        handleOrders()
      }
    }
    handleProfile()
  }, [profile])

  const onClick = (id) => {
    // Navigating to specific Category Page & passing state as prop
    navigate('/favor/' + id)
  }

  let editOptions = user && user.username === username && (
    <div>
      <a
        className="btn btn-outline-warning"
        href={`/profile/edit/${username}`}
        style={{ margin: '5px', width: '90%' }}
      >
        Edit Profile
      </a>
      <a
        className="btn btn-outline-warning"
        href={`/profile/security/${username}`}
        style={{ margin: '5px', width: '90%' }}
      >
        Change Password
      </a>
    </div>
  )
  let ordersSection = user && user.username === username && (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card mb-5" style={{ borderRadius: '15px' }}>
            <div className="card-body p-4">
              <h3 className="mb-3">My Orders</h3>
              <hr className="my-4"></hr>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <div
                    className="card"
                    style={{ width: '18rem', marginBottom: '2rem' }}
                    key={order._id}
                    id={order._id}
                    onClick={() => onClick(order._id)}
                  >
                    <div className="card-body">
                      <p className="card-text">
                        <b>Order status:</b> {order.status}
                      </p>
                      <p className="card-text">
                        <b>Description:</b> {order.package.description}
                      </p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                      <p className="mb-0 text-uppercase">
                        <span className="text-muted small">Show All</span>
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <h6 style={{ textAlign: 'center' }}>
                  Looks like you don't have any orders currently
                </h6>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  let contact = user && user.username != username && (
    <button type="button" className="btn btn-primary btn-rounded btn-lg">
      Contact
    </button>
  )

  let favorCards = favors ? (
    <div className="card-deck">
      {favors.map((favor) => (
        <div
          className="card"
          style={{ width: '18rem', marginBottom: '2rem' }}
          key={favor._id}
          id={favor._id}
          onClick={() => onClick(favor._id)}
        >
          <img src={favor.image} className="card-img-top" alt="Favor Image" />
          <div className="card-body">
            <p className="card-text">{favor.description}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div></div>
  )

  return profile.email != null && favors ? (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="profile">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <div className="profile-pic">
                      <label className="-label" htmlFor="file">
                        <span className="glyphicon glyphicon-camera"></span>
                        <span>Change Image</span>
                      </label>
                      <input id="file" type="file" />
                      <img
                        src={`/uploads/${profile.profilePicture}`}
                        id="output"
                        width="200"
                      />
                    </div>
                  </div>
                  <h4 className="mb-2">
                    {profile.firstname} {profile.lastname}
                  </h4>
                  <p className="text-muted mb-4">@{profile.username}</p>
                  {contact}
                  <div className="d-flex justify-content-between text-center mt-5 mb-2">
                    <div>
                      <p className="mb-2 h5">{favors.length}</p>
                      <p className="text-muted mb-0">Favors</p>
                    </div>
                    <div className="px-3">
                      <p className="mb-2 h5">{comments.length}</p>
                      <p className="text-muted mb-0">Reviews</p>
                    </div>
                    <div>
                      <p className="mb-2 h5">1</p>
                      <p className="text-muted mb-0">Orders</p>
                    </div>
                  </div>
                  <br />
                  {username === profile.username && editOptions}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card mb-5" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h3 className="mb-3">{profile.firstname}'s Favors</h3>
                  <hr className="my-4"></hr>
                  {favorCards}
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0 text-uppercase">
                      <span className="text-muted small">Show All</span>
                    </p>
                  </div>
                </div>
              </div>
              {username === profile.username && ordersSection}
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h3 className="mb-3">{profile.firstname}'s Reviews</h3>
                  <hr className="my-4"></hr>
                  {comments.length > 0 ? (
                    <div>
                      {/* comments.map */}
                      <div className="d-flex justify-content-start align-items-center">
                        <p className="mb-0 text-uppercase">
                          <span className="text-muted small">Show All</span>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <h6 style={{ textAlign: 'center' }}>No reviews, yet. 🥺</h6>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div>
      <div
        className="hero-section"
        style={{ flexDirection: 'column', alignItems: 'center' }}
      >
        <h1>Oops!</h1>
        <br />
        <h3>Profile Not Found.</h3>
        <br />
        <br />
        <Link to="/">Go back to Home</Link>
      </div>
    </div>
  )
}

export default Profile
