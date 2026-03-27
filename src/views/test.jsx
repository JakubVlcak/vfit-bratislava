import { useEffect } from "react";

export default function AuraBackground() {
  useEffect(() => {
    function initUnicorn() {
      if (window.UnicornStudio && window.UnicornStudio.init) {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      }
    }

    // already available
    if (window.UnicornStudio && window.UnicornStudio.init) {
      initUnicorn();
      return;
    }

    // setup global
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
    }

    // prevent duplicate script load
    if (!document.querySelector("script[data-unicorn-loader]")) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";

      script.setAttribute("data-unicorn-loader", "true");

      script.onload = () => {
        initUnicorn();
      };

      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
      <div
        data-us-project="yaha7Bz5f3cRBAa5js9K"
        className="absolute w-full h-full left-0 top-0 -z-10"
      />
    </div>
  );
}