import React from 'react';

const Resume = () => {
  return (
    <>
      <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        <div style={{ width: '40%', margin: '20px auto' }}>
          <div style={{ backgroundColor: '#fff', marginBottom: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ background: 'rgb(189, 232, 235)', height: '70px', padding: '0%' }}>
              <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-between', width: '70%', margin: 130, paddingTop: 10 }}>
                <p>New Delhi, India 110034</p>
                <p>|</p>
                <p>+91 9265614292</p>
                <p>|</p>
                <p>rahulkanjariya9265@gmail.com</p>
              </div>
            </div>
            <div style={{ padding: 20 }}>
              <h1 style={{ textAlign: 'center' }}>ISHAAN AGARWAL</h1>
              <hr />
            <div>
            <div style={{ marginBottom: 30 }}>
                <h5>PROFESSIONAL <br/>SUMMARY</h5>
                <p style={{ marginLeft: 170,  marginTop: '-55px' }}>Customer-focused Retail & Sales professional with in-depth understanding of retail dynamics, marketing, and customer service. Offering 5 years of experience providing quality product recommendations and solutions to meet customer expectations and needs. Demonstrated record of exceeding revenue targets by leveraging sales expertise and communication skills.</p>
              </div>
              <hr />
              <div style={{ marginBottom: 30 }}>
                <h5>CORE <br/> QUALIFICATIONS</h5>
                <ul style={{ marginLeft: 170,  display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px', marginTop: '-55px' }}>
                  <li>Cash register operation</li>
                  <li>POS system operation</li>
                  <li>Sales expertise</li>
                  <li>Teamwork</li>
                  <li>Inventory management</li>
                  <li>Accurate money handling</li>
                  <li>Documentation</li>
                  <li>Retail merchandising expertise</li>
                </ul>
              </div>
            </div>
              <hr />
              <h5>EXPERIENCE</h5>
              <div style={{ marginLeft: 50 }}>
                <div>
                  <p style={{ marginTop: '-40px', marginLeft: 100 }}>RETAIL SALES ASSOCIATE 02/2021 to Current<br />ZARA, New Delhi, India</p>
                  <ul style={{ marginLeft: 100 }}>
                    <li>Increased monthly sales 10% by effectively upselling and cross-selling products to maximize profitability.</li>
                    <li>Prevented store losses by leveraging awareness, attention to detail, and integrity to identify and investigate concerns.</li>
                    <li>Processed payments and maintained accurate drawers to meet financial targets.</li>
                  </ul>
                </div>
                <div>
                  <p style={{ marginLeft: 100 }}>BARISTA 03/2019 to 01/2021<br />Dunkin' Donuts, New Delhi, India</p>
                  <ul style={{ marginLeft: 100 }}>
                    <li>Upsold seasonal drinks and pastries, boosting average store sales by $1500 weekly.</li>
                    <li>Managed morning rush of over 300 customers daily with efficient, levelheaded customer service.</li>
                    <li>Trained entire staff of 15 baristas in new smoothie program offerings and procedures.</li>
                    <li>Developed creative and appealing latte art techniques and instructed coworkers in method.</li>
                  </ul>
                </div>
                <div>
                  <p style={{ marginLeft: 100 }}>CASHIER 07/2017 to Present<br />Burger King, New Delhi, India</p>
                  <ul style={{ marginLeft: 100 }}>
                    <li>Handled cash transactions and provided excellent customer service.</li>
                    <li>Balanced cash registers and generated reports for accounting purposes.</li>
                    <li>Managed customer complaints and ensured their resolution.</li>
                    <li>Assisted with inventory management tasks as needed.</li>
                  </ul>
                </div>
              </div>
              <hr />
              <h5>EDUCATION</h5>
              <div style={{ marginLeft: 50 }}>
                <div>
                  <p style={{ marginTop: '-40px', marginLeft: 100 }}>RETAIL SALES ASSOCIATE 02/2021 to Current<br />ZARA, New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
