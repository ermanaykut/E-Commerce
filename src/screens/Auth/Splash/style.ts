import { StyleSheet } from "react-native";
import { colors } from "../../../constants/variables/colors";

const styles = StyleSheet.create({

    contanier:{
        flex:1,
        backgroundColor: colors.lemon

    },
    lottieContanier:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:30,
        fontWeight:'800',
        textAlign:'center',
        color: colors.purple+60,
        paddingTop:25,
        shadowOpacity:1,
    },

    button:{
        margin:15,
        
    },

    buttonContainer:{
        shadowOpacity:1,
        shadowColor:colors.darkgrey,
        paddingBottom:25,
        paddingHorizontal:25

    }




})

export default styles;