import React, { useState, useEffect } from 'react';
import Battery from './Battery';

export default function Playground() {
  const [battery, setBattery] = useState({ level: 0, charging: false });

  const handleChange = ({ target: { level, charging } }) => {
    setBattery({ level, charging });
  };

  useEffect(() => {
    let battery;

    navigator.getBattery().then(bat => {
      battery = bat;
      battery.addEventListener('levelchange', handleChange);
      battery.addEventListener('chargingchange', handleChange);
      handleChange({ target: battery });
    });

    return () => {
      battery.removeEventListener('levelchange', handleChange);
      battery.removeEventListener('chargingchange', handleChange);
    };
    
  }, []);

  return (
    <section>
      <Battery {...battery} />
    </section>
  );
}
