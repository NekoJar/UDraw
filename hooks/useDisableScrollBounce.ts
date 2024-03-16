import React, { useEffect } from "react";

export const useDisableScrollBounce = () => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden", "overscroll-none");
    return () => {
      document.body.classList.remove("overflow-hidden", "oversroll-none");
    };
  }, []);
};
