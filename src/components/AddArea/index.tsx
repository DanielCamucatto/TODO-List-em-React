import { useState } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskName: string) => void
}


export const AddArea = ({onEnter}: Props) => {

    const [inputText, setInputText] = useState('');
    
    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('')
        }
        
    }

    return(
        <C.Container>
           <div className='Image'>&#10133;</div> 
           <input 
            type="text" 
            placeholder='Adicione uma tarefa'
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyUp={handleKeyUp}
        />
        </C.Container>
    )
}