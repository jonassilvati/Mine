import { View, StyleSheet, Text, Button } from 'react-native';
import TextoCentral from '../components/TextoCentral';


export default props => {
    
    return (
        <>
        <TextoCentral backgroundColor='#3b82c4' color='#fff'>            
            <Text>Olá, eu sou o <Text style={styles.textFeaturing}>Jonas</Text></Text>.
        </TextoCentral>
        <Button title="contato"  onPress={ () => props.navigation.navigate('Contato') } />
        <Button title="skills" onPress={ () => props.navigation.navigate('Skills') } />
        </>
    );
}

const styles = StyleSheet.create({
    textFeaturing:{
        fontWeight: 'bold',
        color: '#E4DFDA'
    }
})