import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import { Button } from '@mui/material';
import Fetchexample from '../src/service/Fetchexample';
import "react-toastify/dist/ReactToastify.css";



function App() {
  const [count, setCount] = useState(0)

 
    const notifyFirst = () => {
      toast.success("First Container Toast!", {
        containerId: "A",
      });
    };

    const notifySecond = () => {
      toast.info("Second Container Toast!", {
        containerId: "B",
      });
    };

  
  const notify = () => {
    const id = toast.loading("Please wait...");
    //do something else
    toast.update(id, {
      render: "All is good",
      type: "success",
      isLoading: false,
      autoClose: 2000,
    });
  };
  
  
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="text-3xl font-bold underline">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="grid place-items-center max-h-10/12 bg-zinc-900/15">
        <Fetchexample></Fetchexample>
      </div>
      <div className="grid place-items-center max-h-10/12 bg-zinc-900/15">
        <Button onClick={notify}>Notify !</Button>
        <ToastContainer
            stacked
          // enableMultiContainer
        />
      </div>
      <div style={{ padding: 20 }}>
        <h2>React Toastify v10 Example (Multi-Container)</h2>
        <button onClick={notifyFirst} style={{ marginRight: 10 }}>
          Show Toast in Container A
        </button>
        <button onClick={notifySecond}>Show Toast in Container B</button>

        {/* Container A */}
        <ToastContainer
          // enableMultiContainer
           stacked
          containerId="A"
          position="top-left"
          autoClose={3000}
        />

        {/* Container B */}
        <ToastContainer
          // enableMultiContainer
           stacked
          containerId="B"
          position="top-right"
          autoClose={3000}
        />
      </div>
    </>
  );
}

export default App
