import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";

const styles = {
  active: {
    display: 'flex',
    backgroundColor: 'pink',
    color: 'black',
    borderRadius: '10px',
    padding: '0px 10px',
    margin: '2px 3px',
    height: '35px',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: '500',
    cursor: 'pointer',
  },
  inactive: {
    display: 'flex',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px',
    padding: '0px 8px',
    margin: '2px 5px',
    height: '35px',
    textAlign: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  text: {
    margin: '0px 0px',
    userSelect: 'none',
  },
};

export default styles;