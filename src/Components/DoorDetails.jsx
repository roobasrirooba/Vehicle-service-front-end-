import React from 'react';

export default function DoorDetails() {
    const doorContainerStyle = {
        backgroundImage: 'url("https://img.freepik.com/free-photo/red-white-triangular-cardboard-sheets-with-copy-space_23-2148320474.jpg?size=626&ext=jpg&uid=R115089061&ga=GA1.2.1733647200.1656571139&semt=ais")', // Replace with the actual path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textalign : 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Ensure the background covers the entire viewport height
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Align content vertically at the center
        alignItems: 'center',
        
      };

      const tableContainerStyle = {
        marginTop: '15px', // Adjust the margin to move the table down
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
    <div style={doorContainerStyle}>
      <h1>DOOR DETAILS</h1>
      <div style={tableContainerStyle}></div>
      
      <table>
        <tbody>
          <tr>
            <td style={boldTextStyle}>Part Name :</td>
            <td style={tableCellStyle}>Front Driver Side Car Door</td>
          </tr>
          <tr>
          <td style={boldTextStyle}>Part Description:</td>
          <td style={tableCellStyle}>
              This high-quality car door is designed to meet or exceed OEM specifications, ensuring a perfect fit and long-lasting performance. Crafted from durable steel, it is engineered for safety and designed to enhance the aesthetics of your vehicle.
            </td>
          </tr>
          <tr>
          <td style={boldTextStyle}>Compatibility :</td>
          <td style={tableCellStyle}>
              Compatible with the following car makes and models:
              <ul>
                <li>Toyota Camry (2018-2022)</li>
                <li>Honda Accord (2019-2023)</li>
                <li>Nissan Altima (2020-2023)</li>
              </ul>
            </td>
          </tr>
          <tr>
          <td style={boldTextStyle}>Condition :</td>
          <td style={tableCellStyle}>Brand new , never used.</td>
          </tr>
          <tr>
          <td style={boldTextStyle}>Price :</td>
          <td style={tableCellStyle}>Rs.7,999 - 10,500</td>
          </tr>
          <tr>
          <td style={boldTextStyle}>Availability :</td>
            <td style={tableCellStyle}>In stock , ready for immediate shipment.</td>
          </tr>
          <tr>
          <td style={boldTextStyle}>Part Number :</td>
            <td style={tableCellStyle}>Manufacturer Part Number : TD-1234567</td>
          </tr>
          <tr>
          <td style={boldTextStyle}>Installation :</td>
            <td style={tableCellStyle}>Professional installation recommended for precise fitment. Installation hardware not included.</td>
          </tr>
          <tr>
          <td style={boldTextStyle}>Warranty :</td>
            <td style={tableCellStyle}>Covered by a 1-year limited warranty against defects in materials and workmanship.</td>
          </tr>
          <tr>
          <td style={boldTextStyle}>Additional Information :</td>
            <td style={tableCellStyle}>
              <ul>
                <li>Color : Unpainted (Primed) - ready for custom paint to match your vehicle's color.</li>
                <li>Does not include door handle or side mirror.</li>
              </ul>
            </td>
          </tr>
          <tr>
          <td style={boldTextStyle}>Seller Information:</td>
            <td style={tableCellStyle}>
              <ul>
                <li>Seller : CarPoint</li>

                <li>Contact Email : sales@autoparts-carpoint.com</li>
                <li>Phone : (555) 123-4567</li>
                
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
