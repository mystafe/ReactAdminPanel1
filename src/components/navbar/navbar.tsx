import './navbar.scss'
const Navbar = () => {
  return (    
    <div className='navbar'>
     <div className="logo">
      <img src="logo.svg" alt="logo"/>
      <span>Mystafe</span>
     </div>

      <div className="icons">
          <img src="search.svg" alt="search"/>
          <img src="app.svg" alt="app"/>
          <img src="expand.svg" alt="expand"/>
          <div className="notification">
            <img src="notifications.svg" alt="notification"/>
            <span>1  </span>
          </div>
          <div className="user">
            <img src="https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg" alt="user"/>
          </div>
      </div>
     </div>
    )
}
export default Navbar