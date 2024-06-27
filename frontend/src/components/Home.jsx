import React from 'react';
import axios from 'axios';

const Home = () => {
  const pay = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/bkash/payment/create', {
        amount: 50,
        orderID: 1
      }, {
        withCredentials: true
      });
      // window.location.href = data.bkauhURL;
      console.log(data)
    } catch (error) {
      console.error('Error making payment:', error);
    }
  }

  return (
    <div>
      <button onClick={pay}>Pay with bkash</button>
    </div>
  );
}

export default Home;
