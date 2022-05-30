import { useEffect, useState } from "react";

const useGraph = () => {
    const [ graph, setGraph ] = useState( [] );
    useEffect( () => {
        fetch( 'data.json' )
            .then( res => res.json() )
            .then( data => setGraph( data ) );
    }, [] );
    return [ graph, setGraph ];
};
export default useGraph;