import { stylesheet } from "typestyle";

export const style = stylesheet({

    container: {
        background: 'linear-gradient(213.53deg, #6879BB 7.06%, #9300BB 95.23%)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        width: '100%',
        height: '100vh',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    logo: {
        marginTop: '32px'
    },

    content: {
        paddingTop: '36px',
	    paddingLeft: '48px',
	    paddingRight: '48px',
	    paddingBottom: '24px',
    },
    layout: {
        width: '424px',
        marginTop: '32px',
        height: 'calc(100% - 112px)',
        background: "#FFFFFF",
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)',
        borderRadius: '2px'
    },

})