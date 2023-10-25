import { useState, useEffect } from 'react'
import { ViewProfile } from '../services/Auth'
import { GetFavorByUser } from '../services/Favor'
import { Link, useParams } from 'react-router-dom'
import FavorCard from '../components/FavorCard'

const Profile = ({ user }) => {
  const [profile, setProfile] = useState('')
  const [favors, setFavors] = useState([])
  const [comments, setComments] = useState([])
  let { username } = useParams()

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
      }
    }
    handleProfile()
  }, [profile])

  let editOptions = user && user.username === username && (
    <div>
      <Link to={`/profile/edit/${username}`}>Edit Profile</Link>
      <Link to={`/profile/security/${username}`}>Change Password</Link>
    </div>
  )

  let contact = user && user.username != username && (
    <button type="button" className="btn btn-primary btn-rounded btn-lg">
      Contact
    </button>
  )

  let favorCards = favors ? <FavorCard favors={favors} /> : <div></div>

  return favors ? (
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
                  <br />
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0 text-uppercase">
                      <span className="text-muted small">Show All</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h3 className="mb-3">{profile.firstname}'s Reviews</h3>
                  <hr className="my-4"></hr>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0 text-uppercase">
                      <span className="text-muted small">Show All</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : null
}

export default Profile
