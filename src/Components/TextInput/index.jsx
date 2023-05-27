import { TextInput, View } from "react-native"
import { Style } from "../../Contexts/Theme"



export const TextCuston = (props) => {
        const onChangeText = (e) => {
            props.CallBack(props.name, e)
        }
    
        return (
        <View style={Style.row}>
            <TextInput
                onChangeText={onChangeText}
                value={props.value}
                placeholder={props.placeholder}
                style={Style.TextInput}
            />
        </View>)
    }
    
    export const TextPhone = (props) => {
        const CallBack = (e) => {
            props.callBack(maskPhone(props.item, e))
        }
        return (
            <TextInputCustom {...props} CallBack={CallBack} />
        );
    }
    
    const TextInputCustom = (props) => {
        return (
            <View style={Style.container}>
                <TextInput
                    style={[Style.input,
                    (props.disabled) ?
                        Style.inputDisabled
                        : Style.inputActived
                    ]}
                    onChangeText={props.CallBack}
                    value={props.item}
                    maxLength={props.maxLength}
                    placeholder={props.placeholder}
                    keyboardType={props.keyboardType}
                    disableFullscreenUI={props.disabled}
                />
            </View>
        );
    }