'use client';

import Countdown from 'react-countdown';

export default function Timer() {
  // Set your target date (for example, 3 days from now)
  const targetDate = new Date(
    Date.now() +
      3 * 24 * 60 * 60 * 1000 + // 3 days
      23 * 60 * 60 * 1000 + // 23 hours
      19 * 60 * 1000 + // 19 minutes
      56 * 1000 // 56 seconds
  );

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex items-center justify-center text-center">
        {/* Days */}
        <div>
          <div className="text-[15px] font-medium ">Days</div>
          <div className="text-2xl font-bold">
            {String(days).padStart(2, '0')}
          </div>
        </div>

        {/* Colon */}
        <div className="text-2xl font-bold text-red-400">:</div>

        {/* Hours */}
        <div>
          <div className="text-sm font-medium ">Hours</div>
          <div className="text-2xl font-bold">
            {String(hours).padStart(2, '0')}
          </div>
        </div>

        {/* Colon */}
        <div className="text-2xl font-bold text-red-400">:</div>

        {/* Minutes */}
        <div>
          <div className="text-sm font-medium ">Minutes</div>
          <div className="text-2xl font-bold">
            {String(minutes).padStart(2, '0')}
          </div>
        </div>

        {/* Colon */}
        <div className="text-2xl font-bold text-red-400">:</div>

        {/* Seconds */}
        <div>
          <div className="text-sm font-medium ">Seconds</div>
          <div className="text-2xl font-bold">
            {String(seconds).padStart(2, '0')}
          </div>
        </div>
      </div>
    );
  };

  return <Countdown date={targetDate} renderer={renderer} />;
}
