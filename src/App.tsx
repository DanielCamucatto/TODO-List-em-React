import { useState } from 'react';
import * as C from './App.styles'; 
import { Item } from './types/Item';
import {ListItem} from './components/Listitem';
import { AddArea } from './components/AddArea';


const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Este é um exemplo de lista', done: false },

  ]);

const handleAddtask = (taskName: string) => {
  let newList = [...list]; 
  newList.push({
    id: list.length + 1, 
    name: taskName, 
    done: false,
  });
  setList(newList);

}

const handleTaskChange = (id: number, done: boolean) => {
  let newList =[...list]; 
  for(let i in newList){    
    if(newList[i].id === id ){
      console.log(newList[i]);
      
      newList[i].done = done;
    }
  }
  setList(newList)
}


  return(
    <C.Container>
      <C.Area>
        <C.Header> TODO LIST </C.Header>

        <AddArea onEnter={handleAddtask} />
               
        {list.map((item,index) =>(
          <ListItem 
            key={index} 
            item={item} 
            onChange = {handleTaskChange}  
          />
          ))} 
      </C.Area>
    </C.Container>
  ); 
}

export default App