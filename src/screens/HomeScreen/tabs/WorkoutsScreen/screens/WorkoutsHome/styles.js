import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    card:{
        fontSize: 20,
        textAlign: 'center',
      },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 16
    },
    button: {
        backgroundColor: '#ffffff',
        height: 44,
        width: 296,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    formContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    gradient: {
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
          width: 300,
          borderRadius: 25
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalButton: {
        backgroundColor: '#ffffff',
        height: 44,
        width: 196,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: 'center'
    },
    modalGradient: {
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        borderRadius: 25
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
