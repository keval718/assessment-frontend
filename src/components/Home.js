
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharacterList from './CharacterList'
import { getCharacterRequest } from '../actions/character'

const Home = () => {
    const character = useSelector(state => state.character.items)
    console.log(character);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCharacterRequest());
    }, [dispatch]);
    return (
        <div>
            {character.length > 0 ? (<CharacterList character={character} />) : (<>Loading...</>)}
        </div>
    )
}

export default Home;