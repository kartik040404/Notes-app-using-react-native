// // StepCounterScreen.js
// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import { setUpdateIntervalForType, SensorTypes, accelerometer } from 'react-native-sensors';

// const StepCounterScreen = () => {
//   const [stepCount, setStepCount] = useState(0);

//   useEffect(() => {
//     setUpdateIntervalForType(SensorTypes.accelerometer, 100); // Update interval in milliseconds

//     let lastUpdate = 0;
//     let isCounting = false;
//     const threshold = 1.5; // Adjust this value based on device sensitivity

//     const subscription = accelerometer.subscribe(({ x, y, z }) => {
//       const currentTime = Date.now();
//       if (currentTime - lastUpdate > 200) {
//         const acceleration = Math.sqrt(x * x + y * y + z * z - 9.81);
//         if (acceleration > threshold && !isCounting) {
//           isCounting = true;
//           setStepCount((prevCount) => prevCount + 1);
//         }
//         if (acceleration < threshold) {
//           isCounting = false;
//         }
//         lastUpdate = currentTime;
//       }
//     });

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 24 }}>Step Count: {stepCount}</Text>
//     </View>
//   );
// };

// export default StepCounterScreen;



// StepCounterScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { setUpdateIntervalForType, SensorTypes, accelerometer } from 'react-native-sensors';

const StepCounterScreen = () => {
  const [stepCount, setStepCount] = useState(0);
  const [lastShakeTime, setLastShakeTime] = useState(0);

  useEffect(() => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 100); // Update interval in milliseconds

    const handleAccelerometerData = ({ x, y, z }) => {
      const currentTime = Date.now();
      const timeDiff = currentTime - lastShakeTime;

      if (timeDiff > 1000 && isShaking(x, y, z)) {
        setLastShakeTime(currentTime);
        setStepCount((prevCount) => prevCount + 1);
      }
    };

    const isShaking = (x, y, z) => {
      const threshold = 10; // Adjust this value based on device sensitivity
      return x > threshold || y > threshold || z > threshold;
    };

    const subscription = accelerometer.subscribe(handleAccelerometerData);

    return () => {
      subscription.unsubscribe();
    };
  }, [lastShakeTime]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Step Count: {stepCount}</Text>
    </View>
  );
};

export default StepCounterScreen;
