import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setCount(10);
    }, 1000);
  }, []);

  return (
    <View>
      <Text>Count: {count}</Text>  {/* Count will be 0 initially, then 10 after 1 second */}
    </View>
  );
};
export default MyComponent; 