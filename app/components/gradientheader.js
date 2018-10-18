import React from 'react';
import {View, StyleSheet, LinearGradient} from 'react-native';

export default const GradientHeader = props => ( 
<View style={{ backgroundColor: '#eee' }}>
<LinearGradient
colors={['#75b3e5','#b96dc4']}
start={[0.0, 0.5]}
end={[1.0, 0.5]}
style={[StyleSheet.absoluteFill, { height: Header.HEIGHT }]}
>
<Header {...props} />
</LinearGradient>
</View>
)
