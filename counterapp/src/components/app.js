import {useState} from 'react';
import './app.css';

function App(){

    const [count,setCount]=useState(100);

    function decreaseCount(){
        setCount(count-1);
    }
    return(
        <>
        <h1>Welcome to Counter App</h1>
        <section>
        <div className='button-div'>
            <button onClick={() => {setCount(count+1)}}>+</button>
            <button onClick={decreaseCount}>-</button>
        </div>
        <div className='count-div'>
            {count}
        </div>
        </section>
        </>
    );
}

export default App;