import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listenCapturing = true) {
    const ref = useRef(); // what is use of ref? it is a hook that allows us to create a reference to a DOM element, 
    // so we can access it and manipulate it. in this case, we want to close the modal when we click outside of it, 
    // so we need to know if the click happened inside or outside of the modal. 
    // we can do this by using the ref to check if the click target is inside the modal or not.
    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                handler();
            }
        }
        document.addEventListener("click", handleClick, listenCapturing);

        return () => document.removeEventListener("click", handleClick, listenCapturing);

    }, [handler, listenCapturing]);

    return ref;
}
