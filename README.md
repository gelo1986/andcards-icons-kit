# andcards-icons-kit

[![Greenkeeper badge](https://badges.greenkeeper.io/andcards/andcards-icons-kit.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/andcards/andcards-icons-kit.svg?branch=master)](https://travis-ci.org/andcards/andcards-icons-kit)
[![npm package](https://badge.fury.io/js/andcards-icons-kit.svg)](https://www.npmjs.org/package/andcards-icons-kit)
[![Dependency Status](https://david-dm.org/andcards/andcards-icons-kit.svg)](https://david-dm.org/andcards/andcards-icons-kit)
[![devDependency Status](https://david-dm.org/andcards/andcards-icons-kit/dev-status.svg)](https://david-dm.org/andcards/andcards-icons-kit#info=devDependencies)
[![peerDependency Status](https://david-dm.org/andcards/andcards-icons-kit/peer-status.svg)](https://david-dm.org/andcards/andcards-icons-kit#info=peerDependencies)

andCards Icons Kit for React and React Native.

Designed for:

- [andCards Suite web app](https://andcards.com).
- [andCards Suite Android app](https://play.google.com/store/apps/details?id=com.cardscorp.contacts).
- [andCards Suite iOS app](https://itunes.apple.com/us/app/andcards-suite/id1291226540?mt=8).
- [andCards Spaces web site](https://andcards.com/s).

#### General Icons

![](iconset-general.png)

#### Brand Icons

![](iconset-social.png)

#### Usage Examples

![](iconset-usage-examples.png)

### Installation

```
yarn add andcards-icons-kit

// In case you don't have. Only for React Native.
yarn add react-native-svg
react-native link react-native-svg
```

### The Gist

```javascript
import Apple from "andcards-icons-kit/Apple";

<Apple color="#cccccc" size={32} />;
```

## Basic API

| prop    | type     | default value |
| ------- | -------- | ------------- |
| `color` | `string` | #000000       |
| `size`  | `number` | 20            |

## Advanced API

Check out [svgs docs](https://github.com/react-native-community/react-native-svg).

## License

MIT
