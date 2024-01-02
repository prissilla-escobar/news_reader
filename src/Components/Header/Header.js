import './Header.css'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import { useState } from 'react'

function Header({ resetError }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='header'>
      <Link to='/' className='home-link' onClick={() => {resetError()}}>
        <h1 className='logo'>NewsReader</h1>
      </Link>
      <div className='dropdown-container'>
          <button 
          className='dropdown'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
          {isHovered ? (
            <span className="long-text">Change Country ▼</span>
            ) : (  
              <span className="short-text">Country</span>
            )}
          </button>
      </div>  
    </div>
  )
}

Header.propTypes = {
  resetError: PropTypes.func.isRequired,
};

export default Header