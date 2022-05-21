import { useState } from 'react';
import * as C from './App.styles'; 
import { Item } from './types/Item';
import {ListItem} from './components/Listitem';
import { AddArea } from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'isso é um teste', done: true },
    {id: 2, name: 'isso é um teste 2', done: false }

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



  return(
    <C.Container>
      <C.Area>
        <C.Header> TODO LIST </C.Header>

        <AddArea onEnter={handleAddtask} />
               
        {list.map((item,index) =>(
        <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  ); 
}

export default App