import React from 'react';

export default function WheelDetails() {
  const wheelContainerStyle = {
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
    border: '6px solid #ccc',
    padding: '8px',
    color: 'white',
  };

  const boldTextStyle = {
    padding: '8px',
    border: '6px solid #ccc',
    fontWeight: 'bold',
    color: 'white',
  };

  return (
    <div style={wheelContainerStyle}>
      <h1>WHEEL DETAILS</h1>
      <div style={tableContainerStyle}></div>
      <table>
        <tbody>
          <tr>
            <td style={boldTextStyle}>Part Name:</td>
            <td style={tableCellStyle}>Car Wheel</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Part Description:</td>
            <td style={tableCellStyle}>
              High-quality car wheel designed for durability and performance. Enhance your vehicle's handling and appearance with these wheels.
            </td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Compatibility:</td>
            <td style={tableCellStyle}>
              Compatible with various car makes and models. Confirm compatibility with your specific vehicle.
            </td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Condition:</td>
            <td style={tableCellStyle}>Brand new, never used.</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Price:</td>
            <td style={tableCellStyle}>Rs.4,499 - 14,699</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Availability:</td>
            <td style={tableCellStyle}>In stock, ready for immediate purchase.</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Part Number:</td>
            <td style={tableCellStyle}>Manufacturer Part Number: WHE-456789</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Installation:</td>
            <td style={tableCellStyle}>Professional installation recommended for proper fitment. Installation hardware not included.</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Warranty:</td>
            <td style={tableCellStyle}>Covered by a 2-year limited warranty.</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Seller Information:</td>
            <td style={tableCellStyle}>
              <ul>
                <li>Seller: Wheel World</li>
                <li>Contact Email: sales@wheelworld.com</li>
                <li>Phone: (555) 123-4567</li>
               
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
