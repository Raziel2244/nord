import { useState } from "react";

export function useTargetChecked(value) {
  const [state, setState] = useState(value);
  const setCheckboxState = (e) => setState(e.target.checked);
  return [state, setCheckboxState];
}

export default useTargetChecked;
