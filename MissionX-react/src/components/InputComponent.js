function InputComponent({val, handleChange}) {
    
return ( 
    <div>
        
            <div>
                <input value={val} type="text" onChange={handleChange}/>

            </div>
        
    </div>
)
}
    
export default InputComponent