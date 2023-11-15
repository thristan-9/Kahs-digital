import React from 'react';

export default function MousePosition() {
  const [mousePosition,setMousePosition] = React.useState({ x: 0, y: 0 });

  function updateMousePosition(ev: { clientX: number, clientY: number }) {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  }

  React.useEffect(() => {

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
}
