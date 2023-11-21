import { Link, Outlet } from 'react-router-dom'
import './Navigation.css'
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        {/* <Link className='logo-container' to='/'>
          <img src={palettoLogo} alt='Logo' className='logo' />
        </Link> */}
        <div className="nav-links-container">
          <Link className="nav-link" to="/recipe/create">
            Nueva Receta
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
