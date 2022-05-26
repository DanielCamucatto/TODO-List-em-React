import * as C from './styles';
import {FaTrash} from 'react-icons/fa';
import { Item } from '../../types/Item';

type Props ={
    item?: Item,
    deleteTasks?: (id: number) => void
}


export const DeleteItems = ({item, deleteTasks}: Props)=> {


    return(
        <C.Container className='trash'>
            <FaTrash className='trash-image'/>
        </C.Container>

    )
}