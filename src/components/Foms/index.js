
import React,{useState} from "react"
import{View,Text,TextInput,Button} from "react-native"
import ResultImc from "./result"
import styles from "./style"
export default function Form(){

const [height, setheight] = useState(null)
const [weight,setweight] = useState(null)
const [imc,setImc] = useState(null)
const [messageImc,setmessageImc] = useState("prencha o peso e a altura !!")
const [textButton,setTextButton] = useState("calcular")

function imcCalcullator () {
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if (weight != null && height != null) {
        imcCalcullator()
        setheight(null)
        setweight(null)
        setmessageImc("seu imc é igual:")
        setTextButton("Calcular novamente !!")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setmessageImc("prencha o peso e a altura !!")
}

    return(
        <View style={styles.fomsContext}>
           <View>
                <Text>Altura:</Text>
                <TextInput
                onChangeText={setheight}
                value={height}
                placeholder="Ex:1.75"
                keyboardType="numeric"
                ></TextInput>

                <Text>peso:</Text>
                <TextInput
                onChangeText={setweight}
                value={weight}
                placeholder="Ex:75.365"
                keyboardType="numeric"
                ></TextInput>

                <Button
                onPress={() => validationImc()}
                 title={textButton}/>
           </View>  
           <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}