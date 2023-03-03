import { useState } from "react";

const useInput = (handler) => {
    const [value, setValue] = useState("");
    const changeHandler = (e) => {
        const value = handler(e.target.value);
        if(value !== undefined) {setValue(value)};
        
    };
    const reset = () => {
        setValue('');
    }
  
    return [ value, changeHandler, reset ];
};

export default useInput;