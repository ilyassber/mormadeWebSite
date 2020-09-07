import { useEffect } from 'react'

export function onClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = event => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                setTimeout(() => handler(event), 200)
            };

            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);
            document.addEventListener('keydown', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
                document.removeEventListener('keydown', listener);
            };
        },
        [ref, handler]
    );
}