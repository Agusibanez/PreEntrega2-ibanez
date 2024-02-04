

export const Counter = () => {
   
    const []= useState()
    console.log()


    
    return( 
    <div>
        <button onClick={sumar}>sumar</button>
        <h4> {counter} </h4>
        <button onClick={restar}>restar</button>
    </div>
    )
}
