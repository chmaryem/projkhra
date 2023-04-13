import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from '../img/bg.png'
import {MainLayout} from '../styles/Layouts'
import Orb from '../components/rhdash/Orb/Orb'
import Navigation from '../components/rhdash/Navigation/Navigation'
import Dashboardrh from '../components/rhdash/Dashboardrh/Dashboardrh';
import Income from '../components/rhdash/Income/Income'
import Expense from '../components/rhdash/Expenses/Expenses';
import { useGlobalContext } from '../context/globalContext';
import { GlobalStyle } from '../styles/GlobalStyle';
import { GlobalProvider } from '../context/globalContext';

function Expenses() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboardrh />
      case 2:
        return <Dashboardrh />
      case 3:
        return <Income />
      case 4: 
        return <Expense />
      default: 
        return <Dashboardrh />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <>
    <GlobalProvider>
    <GlobalStyle />
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
    </GlobalProvider>
   
    </>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default Expenses;
