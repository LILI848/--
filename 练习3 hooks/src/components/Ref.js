import { useRef, useState } from "react";

export default function Ref() {
  const [state, setState] = useState(0);
  const logRef = useRef(0);

  const showRef = () => {
    setState(state + 1); //闭包？
    //没有直接改变state值，而是通过执行一个函数useState来得到state值，
    //这个state初始值保存在闭包中，
    //当showRef执行时，创造了新的execution context，出去找state值，得到的是闭包中的值0；

    logRef.current++;
    //这是直接在current上加1，不是闭包，所以数字直接改变为1了；
    //只要更新了值，就会立即反应到logRef这个对象本身上；
    //所以ref中储存的state一定是最新的state，每一次render都会得到render后更新的ref；
    setTimeout(() => {
      //定时器找的state是showRef函数执行时抓到的闭包state值；
      alert(`state: ${state};ref:${logRef.current}`);
    }, 1000);
  };

  return (
    <div>
      <h1>useRef example</h1>
      <button onClick={showRef}>delay login</button>
      <h2>state: {state} </h2>
      <h2>ref: {logRef.current} </h2>
    </div>
  );
}
