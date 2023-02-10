import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#343434',
        alignItems: 'center',
        justifyContent: 'center',
    },
    element: {
        backgroundColor: '#424242',
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
        fontSize: 16,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})