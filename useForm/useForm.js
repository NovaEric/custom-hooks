import { useState } from "react"


export const useForm = (initialState = {}) => {
  
    const [formValue, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleChange = ({target}) => {

        setValues({
            ...formValue,
            [target.name]: target.value
        });
    };

    return [formValue, handleChange, reset];
}
