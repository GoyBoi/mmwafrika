import React, { useState, useEffect } from 'react';

function CountdownTimer({ endTime, onExpire }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(endTime) - new Date();
    
    if (difference <= 0) {
      if (onExpire) onExpire();
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex space-x-2">
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold bg-gray-900 text-white rounded-lg w-12 h-12 flex items-center justify-center">
          {timeLeft.days.toString().padStart(2, '0')}
        </span>
        <span className="text-xs text-gray-600 mt-1">Days</span>
      </div>
      <div className="flex items-center justify-center text-gray-400">:</div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold bg-gray-900 text-white rounded-lg w-12 h-12 flex items-center justify-center">
          {timeLeft.hours.toString().padStart(2, '0')}
        </span>
        <span className="text-xs text-gray-600 mt-1">Hours</span>
      </div>
      <div className="flex items-center justify-center text-gray-400">:</div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold bg-gray-900 text-white rounded-lg w-12 h-12 flex items-center justify-center">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </span>
        <span className="text-xs text-gray-600 mt-1">Mins</span>
      </div>
      <div className="flex items-center justify-center text-gray-400">:</div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold bg-gray-900 text-white rounded-lg w-12 h-12 flex items-center justify-center">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </span>
        <span className="text-xs text-gray-600 mt-1">Secs</span>
      </div>
    </div>
  );
}

export default CountdownTimer;