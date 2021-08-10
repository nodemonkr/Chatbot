import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Team = () => {
  const [data, setDate] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.post(
        ` http://somensomes.iptime.org:7000/userRegister`,
      );
      setDate(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={onClick}>click</button>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
};

export default Team;
