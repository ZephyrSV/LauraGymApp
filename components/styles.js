import { StyleSheet } from 'react-native';
export const white = '#ffffff';
export const cyan = '#1be08d';
export const dark_cyan = "#609c87"
export const almost_white = "#e0f7f1"
export const eggshell = "#d9eddf"
export const black = "#000000"

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
    width_100: {
        width: '100%',
    },
    width_90: {
        width: '90%',
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
    iconButton_text: {
        color: 'white',
        fontWeight: '900',
        fontSize: 24,
        textShadowColor: black,
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1,
    },
    textTitle: {
        fontSize: 32,
        fontWeight: '900',
        textAlign: 'center',
    },
    bg_cyan : {
        backgroundColor: cyan,
    },
    bg_dark_cyan : {
        backgroundColor: dark_cyan,
    },
    bg_almost_white : {
        backgroundColor: almost_white,
    },
    bg_eggshell : {
        backgroundColor: eggshell,
    },
    white : {
        color: white,
    },
    textOutline: {
        color: dark_cyan,
        fontWeight: 'bold',
        textShadowColor: black,
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1,
    },
    textLeft: {
        textAlign: 'left',
    },
    textRight: {
        textAlign: 'right',
    },
    textCenter: {
        textAlign: 'center',
    },
    textBold: {
        fontWeight: 'bold',
    },
    textItalic: {
        fontStyle: 'italic',
    },
    pb_10: {
        paddingBottom: 10,
    },
    pr_10: {
        paddingRight: 10,
    },
    pl_10: {
        paddingLeft: 10,
    },
    pt_10: {
        paddingTop: 10,
    },
    p_10: {
        padding : 10,
    },
    pl_20: {
        paddingLeft: 20,
    },
    pl_40: {
        paddingLeft: 40,
    },
    pb_40: {
        paddingBottom: 40,
    },
    pt_40: {
        paddingTop: 40,
    },
    pt_80: {
        paddingTop: 80,
    },
    pt_90: {
        paddingTop: 90,
    },
    pb_80: {
        paddingBottom: 80,
    },
    pb_90: {
        paddingBottom: 90,
    },
    button : {
        backgroundColor: cyan,
        borderRadius: 10,
        borderColor: dark_cyan,
        borderWidth: 2,
        shadowColor: black,
        shadowRadius: 2,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 75,
        backgroundColor: dark_cyan,
        borderTopWidth: 5,
        borderColor: eggshell,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footer_text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '900',
    },
    footer_selected: {
        color: cyan,
    },
    colorWhite: {
        color: white,
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
        fontWeight: "900",
        color: white,
        fontSize: 32,
        textAlign: 'center',
        flex : 1,
    },
    header_button_outline: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 15,
    },
    header_button: {
        color: dark_cyan
    },
    rounded_10: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    image_container: {
        width: '35%',
        height: '20%',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: black,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    input: {
        backgroundColor: almost_white,
        borderRadius: 10,
        borderColor: dark_cyan,
        borderWidth: 2,
        shadowColor: black,
        shadowRadius: 2,

    },
    pb_0: {
        paddingBottom: 0,
    },
    scrollview: {
        maxHeight: 220,
    },
    scrollview_element: {
        width: 250,
        backgroundColor: cyan,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 10,
        borderColor: dark_cyan,
        borderWidth: 2,
        overflow: 'hidden',
    },
    scrollview_element_image: {
        resizeMode: 'contain',
        overflow: 'hidden',
        width: 250,
        height: 187,
        borderBottomWidth: 2,
        borderColor: dark_cyan,
    },
    scrollview_element_text: {
        fontWeight: "900",
        fontStyle: "italic",
        color: white,
        textAlign: "center",
        fontSize: 20,
        textShadowColor: black,
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1,
    },
    blackLine: {
        borderBottomWidth: 2,
        borderColor:'black'
    },
    justifySpaceBetween:{
        justifyContent: 'space-between',
    },
    margin10: {
        margin: 10,
    },
    border: {
        borderWidth: 2,
    },
    borderRB: {
        borderBottomWidth: 2,
        borderRightWidth: 2,
    },
    borderLB: {
        borderBottomWidth: 2,
        borderLeftWidth: 2,
    },
    borderBlack: {
        borderColor: black,
    },
    borderRadius_10: {
        borderRadius: 10,
    }
})
