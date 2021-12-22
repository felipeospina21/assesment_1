import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = props => {
  const { hours = 0, minutes = 0, seconds = 60 } = props.hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) {
      props.setAllowNav(false);
    } else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  // const reset = () => {
  //   // setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
  //   console.log('reset');
  // };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);

    return () => clearInterval(timerId);
  }, [secs]);

  return (
    <div>
      <p>
        {`${hrs.toString().padStart(2, '0')}:
          ${mins.toString().padStart(2, '0')}:
          ${secs.toString().padStart(2, '0')}`}
      </p>
    </div>
  );
};

Timer.propTypes = {
  hoursMinSecs: PropTypes.object,
  setAllowNav: PropTypes.func,
};

export default Timer;
