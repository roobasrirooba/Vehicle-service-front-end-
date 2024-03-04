import React from 'react';

export default function BatteryDetails() {
  const batteryContainerStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-photo/red-white-triangular-cardboard-sheets-with-copy-space_23-2148320474.jpg?size=626&ext=jpg&uid=R115089061&ga=GA1.2.1733647200.1656571139&semt=ais")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const tableContainerStyle = {
    marginTop: '15px',
  };

 

  const tableCellStyle = {
    border: '1px solid #ccc',
    padding: '8px',
    color: 'white',
  };

  const boldTextStyle = {
    padding: '8px',
    border: '1px solid #ccc',
    fontWeight: 'bold',
    color: 'white',
  };

  return (
    <div style={batteryContainerStyle}>
      <h1>BATTERY DETAILS</h1>
      <div style={tableContainerStyle}></div>
      <table>
        <tbody>
          <tr>
            <td style={boldTextStyle}>Part Name:</td>
            <td style={tableCellStyle}>Car Battery</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Part Description:</td>
            <td style={tableCellStyle}>
              High-quality car battery designed for reliable and consistent performance. Provides power for starting your vehicle and running electrical systems.
            </td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Compatibility:</td>
            <td style={tableCellStyle}>
              Compatible with a wide range of car makes and models. Verify compatibility with your specific vehicle.
            </td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Condition:</td>
            <td style={tableCellStyle}>Brand new, never used.</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Price:</td>
            <td style={tableCellStyle}>Rs.3,699 - 6,999</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Availability:</td>
            <td style={tableCellStyle}>In stock, ready for immediate purchase.</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Part Number:</td>
            <td style={tableCellStyle}>Manufacturer Part Number: BAT-123456</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Installation:</td>
            <td style={tableCellStyle}>Easy self-installation. Instructions included.</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Warranty:</td>
            <td style={tableCellStyle}>Covered by a 2-year limited warranty.</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Seller Information:</td>
            <td style={tableCellStyle}>
              <ul>
                <li>Seller: Battery Mart</li>
                <li>Contact Email: sales@batterymart.com</li>
                <li>Phone: (555) 789-1234</li>
                
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
