import './App.css';
import {useEffect, useState} from "react";
import {Transition} from "react-transition-group";


function App() {
  const [loaderVisible, setLoaderVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => setLoaderVisible(true), 1000)
        setTimeout(() => setLoaderVisible(false), 5000)
    })

  return (
    <div className="app">
      <button onClick={()=>setLoaderVisible(!loaderVisible)}>{loaderVisible ? 'hide' : 'show'}</button>
    <div className="wrap">
        <Transition
        in = {loaderVisible}
        timeout={500}
        mountOnEnter
        unmountOnExit
        onEnter={() => console.log('onEnter')}
        onEntering={() => console.log('onEntering')}
        onEntered={() => console.log('onEntered')}
        onExiting={() => console.log('onExiting')}
        onExited={() => console.log('onExited')}
        onExit={() => console.log('onExit')}
        >
            {state => <div className={`circle ${state}`}/>}
        </Transition>

    </div>
    </div>
  );
}

export default App;
