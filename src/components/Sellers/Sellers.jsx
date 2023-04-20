import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Sellers() {
  const [data, setData] = useState('');
  const token = 'fj3fqszo39hvo2o616ajvv0mpph3ovm5';
  const getAllData = () => {
    axios
      .get('https://flybridge.kemana.dev/rest/V1/getSeller', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>
                Seller ID
              </th>
              <th style={{ border: '1px solid black', padding: '8px' }}>
                Seller Name
              </th>
              <th style={{ border: '1px solid black', padding: '8px' }}>
                Seller Email
              </th>
              <th style={{ border: '1px solid black', padding: '8px' }}>
                Shop URL
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td style={{ border: '1px solid black', padding: '8px' }}>
                        {data.seller_id}
                      </td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>
                        {data.seller_name}
                      </td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>
                        {data.seller_email}
                      </td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>
                        {data.shopUrl}
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Sellers;
