import React from 'react';
import _ from 'lodash';
import CharacterListItem from './character-list-item';

const CharacterList = (props) => {
    return (
    <div className="col-md-4" id="chrch">
        {_.map(props.characters, character =>  <CharacterListItem key = { character.id} character={character} onCharacterSelect={props.onCharacterSelect} />)}
    </div>
    )
    //Api den gelen datamızı Lodash i le parçaladık Json nesne geldi (For each)
}
//Staless Function => İf you dont need use a state in component thats name Staless function which functions return HTML
//That's function gives components properties by parametres.

export default CharacterList;