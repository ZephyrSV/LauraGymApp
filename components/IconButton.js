import {s} from "./styles";
import {AntDesign, MaterialCommunityIcons, FontAwesome5, FontAwesome} from "@expo/vector-icons";
import {Pressable, Text, View} from "react-native";

/**
 * Returns a button with an icon (based on family) and a label, with a vertical or horizontal layout and an onPress function
 * @param icon {string} - The name of the icon
 * @param family {('AntDesign'|'MaterialCommunityIcons'|'FontAwesome5'|'FontAwesome')} - The name of the icon family
 * @param label {string} - The label of the button
 * @param OnPress {function} - The function to be called when the button is pressed
 * @param vertical {boolean} - Whether the button should be vertical or horizontal
 * @param textStyle {object} - The style of the text
 * @param buttonStyle {object} - The extra style of the button (default: white)
 * @param iconStyle {object} - The extra style of the icon (default: nothing)
 * @returns {JSX.Element}
 */
export default function IconButton ({ icon, family="AntDesign", label, OnPress, vertical=false, textStyle=s.text, buttonStyle=s.colorWhite, iconStyle={}}) {
    function getIcon(){
        switch (family) {
            case "AntDesign":
                return <AntDesign name={icon} size={32} style={buttonStyle}/>
            case "MaterialCommunityIcons":
                return <MaterialCommunityIcons name={icon} size={32} style={buttonStyle}/>
            case "FontAwesome5":
                return <FontAwesome5 name={icon} size={32} style={buttonStyle}/>
            case "FontAwesome":
                return <FontAwesome name={icon} size={32} style={buttonStyle}/>
            default:
                return <AntDesign name={icon} size={32} style={buttonStyle}/>
        }
    }
    if (vertical)
        return (
            <Pressable style={[s.elementColumn, iconStyle]} onPress={OnPress}>
                {getIcon()}
                {label !== undefined ? <Text style={textStyle}>{label} </Text>: null}
            </Pressable>
        )
    else
    return (
        <Pressable style={[s.element, s.button, iconStyle]} onPress={OnPress}>
            <View style={s.elementRow}>
                {label !== undefined ? <Text style={textStyle}>{label} </Text>: null}
                {getIcon()}
            </View>
        </Pressable>
    )
}