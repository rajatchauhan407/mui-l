

export default function ChildComponent({onDataReceived,children}){
    
    return (
        <div>
            <h1>Child Component</h1>
            <button 
                onClick={()=>{onDataReceived(true)}}>Send Data</button>
            {/* <p>{text}</p> */}
            {children}
        </div>
    )
}