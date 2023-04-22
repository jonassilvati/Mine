import { View, Text } from  'react-native';

export default props => (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.backgroundColor || '#fff'
    }}>
        <Text style={{ fontSize: 30, color: props.color, fontWeight: '500' }}>{props.children}</Text>
    </View>
)