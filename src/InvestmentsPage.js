import React from 'react';
import './InvestmentsPage.css';

function InvestmentsPage() {
  return (
    <div className="investments-page">
      <h1>Real Estate Investments</h1>
      <div className="investment-item">
        <img src="/path/to/property1.jpg" alt="Property 1" />
        <h2>Property 1</h2>
        <p>Address: 123 Main St, Anytown, USA</p>
        <p>Purchase price: $100,000</p>
        <p>Current value: $150,000</p>
      </div>
      <div className="investment-item">
        <img src="/path/to/property2.jpg" alt="Property 2" />
        <h2>Property 2</h2>
        <p>Address: 456 Market St, Anytown, USA</p>
        <p>Purchase price: $200,000</p>
        <p>Current value: $250,000</p>
      </div>
      {/* add additional investment items as needed */}
    </div>
  );
}

export default InvestmentsPage;
