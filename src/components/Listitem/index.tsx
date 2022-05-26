import * as C from './styles';
import {Item} from '../../types/Item'
import { DeleteItems } from '../DeleteItems';


type Props = { 
    item: Item,
    onChange: (id: number, done: boolean) => void;
}

const deleteTasks = (id: number) => {
    return null;
}


export const ListItem = ({item, onChange} : Props ) => {

    return (
        <C.Container done={item.done}>
            <input 
                type="checkbox" 
                checked={item.done}
                onChange = {e => onChange(item.id, e.target.checked)}
            />
            <label>{item.name}</label>
            <DeleteItems  />
        </C.Container>
    )
}