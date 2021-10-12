import { useState } from "react";

export function useTargetValue(value) {
    const [state, setState] = useState(value);
    const setSelectState = e => setState(e.target.value);
    return [state, setSelectState];
}

export default useTargetValue;
