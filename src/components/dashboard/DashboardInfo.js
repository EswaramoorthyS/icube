import React from 'react';
import dashboard from '../../assets/dashboard.jpg'; // Adjust the path as necessary

function DashboardInfo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
      <img 
        src={dashboard} 
        className="App-logo" 
        alt="Metal Trader Logo" 
        style={{ width: '45%', padding: '10px 10px 0', borderRadius: '20px' }} 
      />
      <div style={{ width: '50%', textAlign: 'left', padding: '0 20px' }}>
        <ul style={{ padding: '0 10px', listStyleType: 'none' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
            <span style={{ color: 'green', marginRight: '10px', marginTop: '4px', fontSize: '1.2em' }}>✔</span>
            <span>
              The metal trading industry plays a vital role in the global economy, enabling the exchange of essential raw materials. 
              These materials are the backbone of various industries, including construction, automotive, and technology. 
              Adhering to strict safety standards and policies ensures reliable and responsible operations.
            </span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
            <span style={{ color: 'green', marginRight: '10px', marginTop: '4px', fontSize: '1.2em' }}>✔</span>
            <span>
              By connecting suppliers and manufacturers, the industry ensures a steady supply chain for critical resources. 
              This process supports innovation and drives economic growth across multiple sectors worldwide. 
              Compliance with policies fosters trust and accountability among stakeholders.
            </span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
            <span style={{ color: 'green', marginRight: '10px', marginTop: '4px', fontSize: '1.2em' }}>✔</span>
            <span>
              As the industry evolves, there is a growing emphasis on sustainability and eco-friendly practices. 
              Companies are adopting new technologies to reduce environmental impact and promote responsible sourcing. 
              Following safety protocols ensures sustainable and ethical practices.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardInfo;
