import React, { useState, useEffect } from 'react';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // إجمالي الوقت بالثواني (مثلاً: 60 ثانية) لحساب نسبة الـ Progress Bar
  const TOTAL_SECONDS = 60;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds < TOTAL_SECONDS) {
            return prevSeconds + 1;
          } else {
            // عند انتهاء العداد يتم إعادة الضبط والإيقاف
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);
    }

    // تنظيف الـ Interval عند الإيقاف أو الخروج من المكون
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  // التحكم بالبدء والإيقاف وإعادة الضبط
  const handleToggle = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  // تنسيق الدقائق والثواني
  const formatMins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const formatSecs = (seconds % 60).toString().padStart(2, '0');

  // حساب نسبة الـ Progress Bar (من 0% إلى 100%)
  const progressPercentage = (seconds / TOTAL_SECONDS) * 100;

  return (
    <div className="App flex flex-col items-center justify-center h-screen bg-gray-50 gap-6">
      <div>
        {/* Timer Border */}
        <div className="border-2 border-black rounded-lg w-96 h-96 p-6 flex flex-col items-center justify-between bg-white shadow-sm">
          
          {/* Timer Display */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-6xl font-bold text-center tracking-wider font-mono">
              <span className="text-black">{formatMins}</span>
              <span className="text-gray-400 mx-1">:</span>
              <span className="text-black">{formatSecs}</span>
            </div>
          </div>

          {/* Dynamic Timer Progress Bar */}
          <div className="w-full h-3 bg-gray-200 rounded-lg overflow-hidden">
            <div 
              className="bg-black h-full rounded-lg transition-all duration-300 ease-linear"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex gap-4 w-96">
        <button
          className="bg-black hover:bg-gray-800 text-white font-medium rounded-lg p-3 flex-1 transition-all active:scale-95 cursor-pointer"
          onClick={handleToggle}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>

        <button
          className="border-2 border-black hover:bg-gray-100 text-black font-medium rounded-lg p-3 transition-all active:scale-95 cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;