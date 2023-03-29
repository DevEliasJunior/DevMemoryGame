import { useState, useEffect } from 'react';
import * as C from './App.style'
import Logoimage from './assets/devmemory_logo.png'
import { InfoItem } from './components/infoItem'
import { Button } from './components/Button'
import restartIcon from './svgs/restart.svg'
import { GriditemType } from './types/Griditem'
import { items } from './data/items'
import { GridItem } from './components/GridItem/'
import { FormatedTimerElepsed } from './helpers/FormatedTimer';
import { ThemeProvider } from 'styled-components';

function App() {

  const [Playing, setPlaying] = useState<boolean>(false);
  const [TimeElapsed, setTimeElapsed] = useState<number>(0);
  const [MoveCount, setMoveCount] = useState<number>(0);
  const [ShownCount, setShownCount] = useState<number>(0);
  const [gridItem, setGridItem] = useState<GriditemType[]>([])

  const ResetAndClearGrid = () => {
    //passo 1 - Resetar game
    setShownCount(0);
    setTimeElapsed(0);
    setMoveCount(0);

    //passo 2 - Criar um grid 
    //passo 2.1 - Criar um grid vazio
    let tempGrid:GriditemType[] = []
    for(let i = 0; i < (items.length * 2); i++){
      tempGrid.push({
        item: null,
        shown:false,
        permanentShown:false,
      })
    }
    //passo 2.2 - Preencher o grid
    for(let w = 0; w < 2; w++){
      for(let i = 0; i < items.length; i++){
        let pos = -1;
        while(pos < 0 || tempGrid[pos].item !== null){
          pos = Math.floor(Math.random() * (items.length * 2))
        }
        tempGrid[pos].item = i;
      }
    }

    //passo 2.3 - jogar no state
    setGridItem(tempGrid)

    //passo 3 - começar o game
    setPlaying(true);
  }

  const HandleItemClick = (index: number) => {
      if (Playing && index !== null && ShownCount < 2){
        let tempGrid = [...gridItem];

        if(tempGrid[index].shown === false && tempGrid[index].permanentShown === false){
          tempGrid[index].shown = true;
          setShownCount(ShownCount +1)
        }

        setGridItem(tempGrid)
      }
  }

  //VERIFICAR SE O GAME ACABOU
  useEffect(() => {
    if (MoveCount > 0 && gridItem.every(item => item.permanentShown === true)){
      setPlaying(false)
    }
  }, [MoveCount, gridItem])

  //VERIFICAR SE OS ITENS VIRADOS SÃO IGUAIS
  useEffect(() => {
    if(ShownCount === 2){
      let opened = gridItem.filter(item => item.shown === true);
      if(opened.length === 2){

      
        if(opened[0].item === opened[1].item){

          let tempGrid = [...gridItem];

          for(let i in tempGrid){
            if(tempGrid[i].shown){
              tempGrid[i].permanentShown = true;
              tempGrid[i].shown = false;
            }
          }
          setGridItem(tempGrid);
          setShownCount(0)

        } else {
          setTimeout(() => {
            let tempGrid = [...gridItem];

            for(let i in tempGrid){
              tempGrid[i].shown = false;
            }
  
            setGridItem(tempGrid);
            setShownCount(0)
          }, 1000);
        }

        setMoveCount(MoveCount => MoveCount + 1)
      }
    }
  }, [ShownCount, gridItem]);

  useEffect(()=> ResetAndClearGrid(), [])

  //TIMER
  useEffect(()=> {
    const timer = setInterval(() => {
      if(Playing) setTimeElapsed(TimeElapsed + 1);
    }, 1000);
    return () =>  clearInterval(timer)
  }, [Playing, TimeElapsed])

  return (
    <C.Container>
      <C.Info>

        <C.InfoLogo>
          <img src={Logoimage} width='200' alt='Logo imagem'/>
        </C.InfoLogo>

        <C.InfoArea>
            <InfoItem label="Tempo" value={FormatedTimerElepsed(TimeElapsed)} />
            <InfoItem label="Movimentos" value={MoveCount.toString()} />
        </C.InfoArea>

        <Button label="Reiniciar" icon={restartIcon} onclick={ResetAndClearGrid}></Button>

      </C.Info>
      <C.GridArea>
        <C.Grid>
            {gridItem.map((item, index)=> (
              <GridItem 
                key={index}
                item={item}
                onClick={() => HandleItemClick(index)}
              />
            ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  )
}

export default App
