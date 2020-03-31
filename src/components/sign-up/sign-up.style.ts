import { stylesheet } from "typestyle";

export const style = stylesheet({
    content: {
        paddingTop: '36px',
	    paddingLeft: '48px',
	    paddingRight: '48px',
	    paddingBottom: '24px',
    },

    layout: {
        width: '424px',
        marginTop: '32px',
        background: "#FFFFFF",
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)',
        borderRadius: '2px',
        minHeight: 'calc(100vh - 118px)',
    },

    h3: {
        margin: 0,
    }

})