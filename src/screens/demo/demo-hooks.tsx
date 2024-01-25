// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// export default function DemoHooks() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <TouchableOpacity style={styles.button} onPress={handleClick}>
//       <Text>You pressed me {count} times</Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     backgroundColor: 'green',
//     padding: 10,
//     margin: 10,
//   },
// });


// import React, { useState } from 'react';
// import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

// interface MyInputProps {}

// const DemoHooks: React.FC<MyInputProps> = () => {
//   const [text, setText] = useState('hello');

//   const handleChange = (newText: string) => {
//     setText(newText);
//   };

//   const handleReset = () => {
//     setText('hello');
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         value={text}
//         onChangeText={handleChange}
//       />
//       <Text>You typed: {text}</Text>
//       <Button title="Reset" onPress={handleReset} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 8,
//   },
// });

// export default DemoHooks;
//

// import React, { useState } from 'react';
// import { View, Text, Switch, StyleSheet } from 'react-native';

// interface MyCheckboxProps {}

// const DemoHooks: React.FC<MyCheckboxProps> = () => {
//   const [liked, setLiked] = useState(true);

//   const handleChange = () => {
//     setLiked(!liked);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.checkboxContainer}>
//         <Switch
//           value={liked}
//           onValueChange={handleChange}
//         />
//         <Text style={styles.label}>I liked this</Text>
//       </View>
//       <Text>You {liked ? 'liked' : 'did not like'} this.</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   label: {
//     marginLeft: 8,
//   },
// });

// export default DemoHooks;


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// interface FormProps {}

// const DemoHooks: React.FC<FormProps> = () => {
//   const [name, setName] = useState('Taylor');
//   const [age, setAge] = useState(42);

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       <Button
//         title="Increment age"
//         onPress={() => setAge(age + 1)}
//       />
//       <Text>Hello, {name}. You are {age}.</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 8,
//   },
// });

// export default DemoHooks;

import React, { useState, useEffect } from 'react'
import { Button } from 'react-native'

export default function DemoHooks() {
    const [count, setCount] = useState(0)
    const countEvery3 = Math.floor(count / 3)

    // useEffect(() => {
    //     console.log(countEvery3)
    // }, [countEvery3])


    // useEffect(() => {
    //     console.log('Only once!')
    // }, [])

    useEffect(() => {
        console.log('Incremented!')
    })

    return (
        <Button
            title={`Increment ${count}`}
            onPress={() => {
                setCount(count + 1)
            }}
        />
    )
}
