import React from 'react';

export default function AlternatorDetails() {
  const alternatorContainerStyle = {
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
    <div style={alternatorContainerStyle}>
      <h1>ALTERNATOR DETAILS</h1>
      <div style={tableContainerStyle}></div>
      <table>
        <tbody>
          <tr>
            <td style={boldTextStyle}>Part Name:</td>
            <td style={tableCellStyle}>Car Alternator</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Part Description:</td>
            <td style={tableCellStyle}>
              High-quality car alternator designed to generate electrical power for your vehicle's electrical systems and recharge the battery.
            </td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Compatibility:</td>
            <td style={tableCellStyle}>
              Compatible with a variety of car makes and models. Verify compatibility with your specific vehicle.
            </td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Condition:</td>
            <td style={tableCellStyle}>Brand new, never used.</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Price:</td>
            <td style={tableCellStyle}>Rs.7,000 - 16,000</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Availability:</td>
            <td style={tableCellStyle}>In stock, ready for immediate purchase.</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Part Number:</td>
            <td style={tableCellStyle}>Manufacturer Part Number: ALT-789012</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Installation:</td>
            <td style={tableCellStyle}>Professional installation recommended for precise fitment. Installation hardware not included.</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Warranty:</td>
            <td style={tableCellStyle}>Covered by a 2-year limited warranty.</td>
          </tr>
          <tr>
            <td style={boldTextStyle}>Seller Information:</td>
            <td style={tableCellStyle}>
              <ul>
                <li>Seller: Alternator World</li>
                <li>Contact Email: sales@alternatorworld.com</li>
                <li>Phone: (555) 987-6543</li>
                
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
