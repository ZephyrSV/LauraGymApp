import { StyleSheet } from 'react-native';
export const s = StyleSheet.create({
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
    elementColumn: {
        flexDirection: 'column',
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
        textAlign: 'center',
    },
    button : {
        backgroundColor: '#424242',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 75,
        backgroundColor: '#2f2f2f',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footer_text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
})