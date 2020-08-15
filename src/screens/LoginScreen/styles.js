import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {

    },
    logo: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 30,
        marginLeft: 30,
        paddingLeft: 16
    },
    button: {
        buttonColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    footerView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d',
    },
    footerLink: {
        color: '#778eec',
        fontWeight: 'bold',
        fontSize: 16
    }
})