import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-testid="counter-value">{count}</h1>
      <button onClick={() => setCount(count + 1)} data-testid="increment-btn">
        Incrementar
      </button>
      <button onClick={() => setCount(count - 1)} data-testid="decrement-btn">
        Decrementar
      </button>
    </div>
  );
};

export default Counter;
