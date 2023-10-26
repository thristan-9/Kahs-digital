import {useEffect, useState, useRef} from "react";

export default function CountUp({start = 0, end, timer = 50}) {

    const [number, setNumber] = useState(0);
    const startRef = useRef(start);

    const accumulator = end / 200;

    function updateNumber() {
        if (startRef.current < end) {
            const result = Math.ceil(startRef.current + accumulator);
            if (result > end) return setNumber(end);

            setNumber(result);
            startRef.current = result;
        }
        setTimeout(updateNumber, timer);
    }

    useEffect(()=>{
        let isMounted = true;
        if (isMounted) updateNumber()
        return () => (isMounted = false)
    }, [start, end])

    return (
        <>
            {number}
        </>
    )
}