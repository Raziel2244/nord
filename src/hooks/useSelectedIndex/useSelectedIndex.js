import { useState } from "react";

export function useSelectedIndex(value) {
  const [state, setState] = useState(value);
  const setSelectedIndex = (e) => setState(e.target.selectedIndex);
  return [state, setSelectedIndex];
}

export default useSelectedIndex;
