import { useEffect, useRef } from "react";

export function useLottie() {
  const ref = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return ref;
}
