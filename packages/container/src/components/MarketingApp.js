import React, {useRef, useEffect} from 'react';
import {mount} from 'marketing/MarketingIndex';

export default () => {
    const ref = useRef(null);
    useEffect(() => {
        console.log(mount);
        mount(ref.current);
    })
    return <div ref={ref} />
}