


// function Panel({ title, children, isActive, onShow }) {
    
//   console.log(isActive);
//     return (
//       <section className="panel">
//         <h3>{title}</h3>
//         {isActive ? (
//           <p>{children}</p>
//         ) : (
//           <button onClick={onShow}>
//             Show
//           </button>
//         )}
//       </section>
//     );
//   }


// export default function LiftUp(){

//     const [activeIndex, setActiveIndex] = useState(0);
//     return (
//         <>
//           <h2>Almaty, Kazakhstan</h2>
//           <Panel title="About" 
//                  isActive={activeIndex === 1} 
//                  onShow={()=>{setActiveIndex(1)}}>
//             With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
//           </Panel>
//           <Panel 
//             title="Etymology" 
//             isActive={activeIndex === 0} 
//             onShow={()=>{setActiveIndex(0)}}>
//             The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
//           </Panel>
//         </>
//       );
// }


import { useState } from "react";

import ChildComponent from "../components/childComponent";

export default function LiftUp({value}){
  console.log(value);
  // setting up state
  const [showtext, onShowText] = useState(false);

  function handleDataReceived(data){
    console.log(data);
    onShowText(data);
  }
  
  return <ChildComponent
            onDataReceived={handleDataReceived}
          >
            {showtext && (<div>
              <h1>This data is being shown on request of child</h1>
              <p>Hello from the Child</p>
            </div>)}
          </ChildComponent>
}