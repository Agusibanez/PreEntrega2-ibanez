import CartWidget from "../common/CartWidget";

const Navbar = ()=>{

    return(

    <div> 
        <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
            <img src="src/img/530ce7a9-65bf-495e-9482-29da2184fa6c.jpg" alt="logo" style={{ width: '100px', height: 'auto' }}/>
            <ul style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"flex-end",gap:"1.2rem", listStyle:"none", alignItems:"center"}}>
                <li>inicio</li>
                <li>tienda</li>
                <li>login</li>
                <li>contacto</li>
                <CartWidget/>  
            </ul>   
        </div>
    </div>
    )
}

export default Navbar;