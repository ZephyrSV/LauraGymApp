import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#333333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    element: {
        padding: 20,
        borderRadius: 10,
        margin: 10,
    },
    elementRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#fff',
        fontSize: 24,
    },
    textTitle: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    button : {
        backgroundColor: '#424242',
    },
    modalContainer: {
        height: '10',
        width: '100%',
        backgroundColor: '#25292e',
        position: 'absolute',
        bottom: 100,
    }
})