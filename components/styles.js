import { StyleSheet } from 'react-native';
const white = '#ffffff';
const cyan = '#1be08d';
const dark_cyan = "#609c87"
const almost_white = "#e0f7f1"
const eggshell = "#d9eddf"
const black = "#000000"

export const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : white,
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
        color: '#343434',
        fontSize: 24,
    },
    textTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button : {
        backgroundColor: '#1be08d',
        borderRadius: 10,
        borderWidth: 2,
        shadowColor: '#000',
        shadowRadius: 2,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 75,
        backgroundColor: '#1be08d',
        borderTopWidth: 5,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footer_text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 70,
        backgroundColor: dark_cyan,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 5,
        padding : 20,
        borderBottomWidth: 5,
        borderColor: eggshell,
    },
    header_text: {
        color: almost_white,
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
        flex : 1,
        paddingLeft: 40,
    },
    header_button_outline: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 15,
    },
    header_button: {
        color: dark_cyan
    }
})