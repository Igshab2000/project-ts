import { stylesheet } from "typestyle";

export const style = stylesheet({

  menuStyle: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    background: '#404064',
    width: '60%',
    maxWidth: '224px',
    padding: '10px 24px',
    boxSizing: 'border-box',
    transform: 'translateX(0px)',
    transition: 'transform .22s ease-in',
    zIndex: 90
  },

  menuClose: {
    transform: 'translateX(-320px)'
  },

  field: {
    width: '224px',
    height: '60px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: '18px',
  },

  span: {
    fontSize: '14px',
    lineHeight: '19px',
    color: '#FFFFFF',
    margin: 0,
    marginLeft: '16px'
  }
    
});
