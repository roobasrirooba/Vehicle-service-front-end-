import React from 'react';
import './LandingPage.css'; // Updated CSS file name
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const navAdminLogin = (event) => {
    navigate("../adminlogin");
  }
  const navEmployeeLogin = (event) => {
    navigate("../employeelogin");
  }
  const navUserLogin = (event) => {
    navigate("../userlogin");
  }

  return (
    <div className='LandingPage-body'>
      <header className='LandingPage-header'>
        <h1><span className='LandingPage-span'>CarPoint </span></h1>
        <nav className='LandingPage-nav'>
          <ul>
            <button className='LandingPage-button' onClick={navUserLogin}>User</button>
            <button className='LandingPage-button' onClick={navUserLogin}>Admin</button>
            <button className='LandingPage-button' onClick={navUserLogin}>Employee</button>
          </ul>
        </nav>
      </header>
      <div className="LandingPage-main">
        <div className="LandingPage-content">
          <h1><span className='LandingPage-span'>Auto Solutions</span></h1>
          <h3>
            Embrace <span className='LandingPage-span'> Modern Solutions </span> to streamline your business operations and stay ahead of the competition.
          </h3>
          {/* Container for images and text */}
          <div className="icon-container">
            <div className="icon-item">
              {/* Image 1 */}
              <img src="https://vehiclecare.in/static/media/insurance_claim.90e73048c1657fbb77fa.png" alt="Icon" className="icon-image" />
              {/* Text 1 */}
              <p>  Insurance Claim </p>
            </div>
            <div className="icon-item">
              {/* Image 2 */}
              <img src="https://vehiclecare.in/static/media/honest_pricing.05a10528944e13b8dcd0.png" alt="Icon" className="icon-image" />
              {/* Text 2 */}
              <p>  Honest Pricing</p>
            </div>
            <div className="icon-item">
              {/* Image 3 */}
              <img src="https://vehiclecare.in/static/media/genuine_parts.468df751d9a851f0c532.png" alt="Icon" className="icon-image" />
              {/* Text 3 */}
              <p>  Genuine Parts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;