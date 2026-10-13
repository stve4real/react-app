
import ListGroup from './components/ListGroup';
import Alert from './components/Alert'
import Message from './Message';
import Button from './components/Button';
import { useState } from 'react';

function App(){
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
let heading = "cities";

const [alertVisible, setAlertVisibility] = useState(false);
const HandleSelecedItem = (item:string) => {
    console.log(item);


    
}



    return ( 
     <div>
        <Message />
    <ListGroup items={items} heading="Cities" onSelectedItem={HandleSelecedItem} /> 
    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
        My Alert
    </Alert>}
    <Button onClick={() => setAlertVisibility(true)}>My Button</Button>

    </div>
    
    )
};
export default App; 