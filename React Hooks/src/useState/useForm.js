import { useState } from "react";

// OWN CUSTOM HOOK FOR FORMS

export const useForm = (initialValues) => {

    const [values, setValues] = useState(initialValues);

    return [values,
        e =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }]
}