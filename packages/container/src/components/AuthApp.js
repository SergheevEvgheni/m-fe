import React, {useRef, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {mount} from 'auth/AuthIndex';

export default ({onSignIn}) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const {onParentNavigate} = mount(ref.current, {
            onNavigate: ({pathname}) => {
                if (history.location !== pathname) history.push(pathname);
            },
            onSignIn,
            initialPath: history.location.pathname
        });

        history.listen(onParentNavigate)
    }, []);
    
    return <div ref={ref} />
}