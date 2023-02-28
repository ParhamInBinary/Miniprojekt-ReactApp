import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Sidebar } from '../Sidebar';

const useStyles = createUseStyles({
  hamburgerMenu: {
    backgroundColor: "red",
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '20px',
    cursor: 'pointer',
  },
  button: {
    position: 'relative',
    width: '24px',
    height: '24px',
    backgroundColor: 'transparent',
    border: 'none',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '20px',
    height: '2px',
    backgroundColor: '#333',
    transition: 'transform 0.3s ease-in-out',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#333',
      transform: 'translateY(-8px)',
      transition: 'transform 0.3s ease-in-out',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#333',
      transform: 'translateY(8px)',
      transition: 'transform 0.3s ease-in-out',
    },
  },
  links: {
    position: 'absolute',
    top: 'calc(100% + 10px)',
    left: 0,
    backgroundColor: '#eee',
    borderRadius: '5px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
    '& a': {
      color: '#333',
      textDecoration: 'none',
      margin: '10px 0',
    },
  },
  linksVisible: {
    opacity: 1,
    visibility: 'visible',
  },

  '@media (max-width: 768px)': {
    aside: {
      display: 'none',
    },
    hamburgerMenu: {
      display: 'inline-block',
    },
    links: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#eee',
      borderRadius: '0',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      opacity: 0,
      visibility: 'hidden',
      transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
      '& a': {
        color: '#333',
        textDecoration: 'none',
        margin: '10px 0',
      },
    },
    linksVisible: {
      opacity: 1,
      visibility: 'visible',
    },
  },
});

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.hamburgerMenu}>
      <button className={classes.button} onClick={handleMenuClick}>
        <span className={classes.icon}></span>
      </button>
      <div
        className={`${classes.links} ${
          isOpen ? classes.linksVisible : ''
        }`}
      >
        <Sidebar />
      </div>
    </div>
  );
}
