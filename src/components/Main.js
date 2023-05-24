import React from 'react'
import { useState } from 'react';

function Main() {
  const [availableTimes, setAvailableTimes] = useState();

  function updateTimes(e) {
    setAvailableTimes(e.target.value);
    return availableTimes;
  }

  function initializeTimes() {
    
  }

  return (
    <div>Main</div>
  )
}

export default Main