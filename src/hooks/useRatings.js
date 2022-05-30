import { useEffect, useState } from "react";

const useRatings = () => {
    const [ ratings, setRatings ] = useState( [] );
    useEffect( () => {
        fetch( 'ratings.json' )
            .then( res => res.json() )
            .then( data => setRatings( data ) );
    }, [] );
    return [ ratings, setRatings ];
};
export default useRatings;