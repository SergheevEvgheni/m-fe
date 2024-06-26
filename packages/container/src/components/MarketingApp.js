import React, {useRef, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {mount} from 'marketing/MarketingIndex';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const {onParentNavigate} = mount(ref.current, {
            onNavigate: ({pathname}) => {
                if (history.location !== pathname) history.push(pathname);
            },
            initialPath: history.location.pathname
        });

        history.listen(onParentNavigate)
    }, []);

    return <div ref={ref} />
}