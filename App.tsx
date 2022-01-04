/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const TweetComp: React.FC<{}> = () => {
  const [tweet, setTweet] = useState<string>('Add tweet here');
  const [inputStyle, setInputStyle] = useState<object>({
    borderColor: 'blue',
    borderWidth: 4,
    padding: 8,
    height: 100,
    borderRadius: 10,
  });

  const [textstyle, setTextStyle] = useState<object>({
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  });

  useEffect(() => {
    handleLenChanges();
  }, [tweet]);

  function handleLenChanges() {
    let len = tweet.split('').length;
    if (len >= 240) {
      setInputStyle({...inputStyle, borderColor: 'red'});
      setTextStyle({...textstyle, color: 'red'});
    } else if (len >= 230) {
      setInputStyle({...inputStyle, borderColor: 'yellow'});
      setTextStyle({...textstyle, color: 'yellow'});
    } else {
      setInputStyle({...inputStyle, borderColor: 'black'});
      setTextStyle({...textstyle, color: 'black'});
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={inputStyle}
        multiline={true}
        value={tweet}
        onChangeText={e => {
          setTweet(e);
        }}
      />
      <Text style={textstyle}>
        {240 - tweet.split('').length + ' Chars Remaning'}
      </Text>
    </View>
  );
};

const App: React.FC<{}> = () => {
  return <TweetComp />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150,

    backgroundColor: '#ecf0f1',
    padding: 8,

    borderWidth: 2,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
