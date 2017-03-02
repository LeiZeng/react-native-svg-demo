import React from 'react'
import { View, Text } from 'react-native'

import SvgUri from 'react-native-svg-uri'
import svgContent from './assets/simpson.svg'
// import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

// const svgContent = require('./assets/simpson').default
const Simpson = () => (
  <View>
    <SvgUri
          width="200"
          height="200"
          svgXmlData={svgContent}
        />
    <SvgUri
          width="100"
          height="100"
          svgXmlData={svgContent}
        />
    <SvgUri
          width="40"
          height="40"
          svgXmlData={svgContent}
        />
    <SvgUri
          width="20"
          height="20"
          svgXmlData={svgContent}
        />
  </View>
);

export default Simpson
