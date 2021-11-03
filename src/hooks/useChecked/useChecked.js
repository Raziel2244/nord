import { useState } from "react";

export function useChecked(value) {
  const [state, setState] = useState(value);
  const setChecked = (e) => setState(e.target.checked);
  return [state, setChecked];
}

export default useChecked;
