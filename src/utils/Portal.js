import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, [mounted]);

  return mounted
    ? createPortal(children, document.querySelector(".search-portal"))
    : null;
};

export default Portal;
