import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button } from 'react-native';
import AnimatedSprite from 'react-native-animated-sprite';
import monsterSprite from './sprites/monster/monsterSprite';
import sample from 'lodash.sample';


export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      animationType: 'ALLIE',
      tweenOptions: {},
    };
  }

  onPress () {
    const animation = sample(monsterSprite.animationTypes);
    debugger;
    this.setState({ animationType: animation });
  }

  tweenSprite () {
    const coords = this.refs.monsterRef.getCoordinates();
    const location = [0, 100, 200, 300, 400, 500];
    this.setState({
      tweenOptions: {
        tweenType: 'sine-wave',
        startXY: [coords.left, coords.top],
        xTo: [sample(location), sample(location)],
        yTo: [sample(location), sample(location)],
        duration: 1000,
        loop: false,
      }
    }, () => {
      this.refs.monsterRef.startTween();
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <AnimatedSprite
          ref={'monsterRef'}
          sprite={monsterSprite}
          animationFrameIndex={monsterSprite.animationIndex(this.state.animationType)}
          loopAnimation={true}
          coordinates={{
            top: 100,
            left: 100,
          }}
          size={{
            width: monsterSprite.size.width * 1.5,
            height: monsterSprite.size.height * 1.5,
          }}
          draggable={true}
          tweenOptions = {this.state.tweenOptions}
          tweenStart={'fromMethod'}
          onPress={() => {this.onPress();}}
        />
        <Button
          onPress={() => {this.tweenSprite()}}
          title="Tween me!"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


//GOOGLE MAPS STUFF

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import MapView from 'react-native-maps';
//
// export default class App extends React.Component {
//   render() {
//
//     return (
//       <View style={styles.container}>
//        <MapView style={styles.map}
//           initialRegion = {{
//             latitude: 40.712784,
//       longitude: -74.005941,
//        latitudeDelta: 0.0222,
//       longitudeDelta: 0.0201
//           }}
//         >
//         <Text>MOM</Text>
//         </MapView>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0
//   },
// });
