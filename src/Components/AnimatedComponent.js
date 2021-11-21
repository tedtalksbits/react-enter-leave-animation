import React, { useState } from 'react'
import styled from 'styled-components';

const Main = styled.main`
   display: ${({ removeElement }) => (removeElement ? 'none' : 'block')};
  
   animation: dropdown-enter cubic-bezier(0.175, 0.885, 0.32, 1.275) .5s forwards;
   /* add animation name below by replacing exit */
   animation: ${({ exitAnimation }) => exitAnimation ? 'dropdown-exit .5s ease forwards' : ''};


`



const AnimatedComponent = ({ children }) => {

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
         <button onClick={() => { show ? removeElement() : showElement() }}>
            {show ? <i className='bx bxs-chevron-down-circle'></i> : <i className='bx bxs-chevron-up-circle' ></i>}
         </button>
         <Main removeElement={removeState} exitAnimation={!show} className="dropdown" >
            {children}
         </Main>
      </>
   )
}

export default AnimatedComponent
