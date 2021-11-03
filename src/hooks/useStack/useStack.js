import { useState } from "react";

export function useStack(value = []) {
  const [state, setState] = useState(value);
  const push = (i) => setState((s) => [...s, i]);
  const set = (s = []) => setState(s);
  return [state, push, set];
}

export default useStack;
