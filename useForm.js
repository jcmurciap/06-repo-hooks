import { useState } from 'react'

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState)

    // Limpia el textbox después de oprimir el boton
    const reset = () => {
        setValues( initialState );
    }
    
    // e = is an event
    const handleInputChange = ({ target }) => {
        
        setValues({
            ...values,
            [ target.name ]: target.value // name: your input
        })
    }
    return [ values, handleInputChange, reset ];
}
