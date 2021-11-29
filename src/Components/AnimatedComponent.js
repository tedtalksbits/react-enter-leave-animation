import React, { useState } from 'react'
import styled from 'styled-components';

const Main = styled.main`
   display: ${({ removeElement }) => (removeElement ? 'none' : 'block')};
   animation: dropdown-enter ease .2s forwards;
   /* add animation name below by replacing exit */
   animation: ${({ exitAnimation }) => exitAnimation ? 'dropdown-exit .2s ease forwards' : ''};
   overflow: hidden;
   transition: max-height 0.4s ease-out;
   background: yellow;
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
      <div>
         <button onClick={() => { show ? removeElement() : showElement() }}>
            {show ? <i className='bx bxs-chevron-down-circle'></i> : <i className='bx bxs-chevron-right-circle' ></i>}
         </button>
         <Main removeElement={removeState} exitAnimation={!show} className="dropdown content" >
            {children}
         </Main>
      </div>
   )
}

export default AnimatedComponent
