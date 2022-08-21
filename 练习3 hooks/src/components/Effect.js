import { useEffect, useState } from "react";

export default function Effect() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [time]);
  return (
    <div>
      <h1>useEffect Example</h1>
      <h2>{time.toLocaleString()}</h2>
    </div>
  );
}
