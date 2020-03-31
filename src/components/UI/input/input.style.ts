import { stylesheet } from "typestyle";

export const style = stylesheet({
    input: {
        background: '#FFFFFF',
        border: '1px solid #D6DCE9',
        paddingLeft: "12px",
        paddingRight: "12px",
        paddingTop: "6px",
        paddingBottom: "6px",
        borderRadius: "4px",
        color: "#6879BB",
        outline: "none",
        width: "inherit",
        boxSizing: "border-box",
        lineHeight: "22px",

        $nest: {
            "&:hover": {
                color: '#415FD5',
                outline: '#415FD5'
            },

            "&:default": {
                color: '#CCCCCC',
            }
    
        }

    },

    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    span: {
        color: '#EE4141',
        fontSize: '15px',
        fontWeight: 'normal',
    },

    passwordFieldInputZoneStyle: {
        paddingRight: "36px"
    }
})

export const passwordFieldIconStyle = {
    fill: "#6879BB",
    position: "absolute",
    right: "0",
    top: "0",
    padding: "10px",
    cursor: "pointer"
};