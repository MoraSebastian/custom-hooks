import { useState } from "react";


export const useForm = ( initialForm = {} ) => {
    
    const [ formState, setFormState ] = useState( initialForm );

    /* Esta desestructuracion es muy especifica, no tiene sentido,
        por tanto se comenta */
    //const { username, email, password} = formState;

    const onInputChange = ({ target }) => {
        
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
