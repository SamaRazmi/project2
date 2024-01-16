import React from 'react';
import snipperImg from '../../img/Spinner.gif';
function Spinner(props) {
  return (
    <div style={{ marginLeft: '40%' }}>
      <img src={snipperImg} alt="spinner" />
    </div>
  );
}

export default Spinner;
