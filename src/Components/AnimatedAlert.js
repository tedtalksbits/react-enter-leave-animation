import React, { useState } from 'react'
import styled from 'styled-components';

const Alert = styled.main`
   display: ${({ removeElement }) => (removeElement ? 'none' : 'block')};
   border: rgba(0, 0, 0, 0.4) 1px solid;
   background: hsla(0, 0%, 0%, 0.6);
   padding: 1em;
   border-radius: .675rem;
   color: white;
   transition: all ease .3s;
   animation: enter cubic-bezier(0.175, 0.885, 0.32, 1.275) .5s forwards;
   /* add animation name below by replacing exit */
   animation: ${({ exitAnimation }) => exitAnimation ? 'exit .5s ease forwards' : ''};


`



const AnimatedAlert = () => {

   const [show, setShow] = useState(false)
   const [removeState, setRemoveState] = useState(false);

   const showElement = () => {
      setShow(true);
      setRemoveState(false);
   }

   const removeElement = () => {
      setShow(false);
      setTimeout(() => {
         setRemoveState(true)
      }, 300)
   }
   return (
      <>
         <button className="alert-button" onClick={showElement}>Open Alert</button>
         <Alert removeElement={removeState} exitAnimation={!show} className="alert" >
            <h1 className="alert-text">Alert!</h1>
            <button className="alert-button" onClick={removeElement}>close</button>
         </Alert>
      </>
   )
}

export default AnimatedAlert
