import React from 'react';
import md5 from 'md5';
import $ from 'jquery';
import SearchBar from '../search-bar';
import CharacterList from '../character-list';
import Details from '../details';

const API_URL = 'https://gateway.marvel.com:443/v1/public/';
const publicKey = '9dc352a3af8aa7fb85e32d0d18275212';
const privateKey = 'c95e12659c8d6dbdf54a73029e62464f0edd7723';
const ts = '1';
const auth = `ts=${ts}&apikey=${publicKey}&hash=${md5(`${ts}${privateKey}${publicKey}`)}`;


class Home extends React.Component {
  constructor(props) { //CharacterListe de ki elementlere tıklayınca İndex deki state ler update edilecek
    super(props);
    this.state = {
      characters: null,
      selectedCharacter: null,
    }
    this.handleCharacterSelect= this.handleCharacterSelect.bind(this);
    this.CharacterSearch = this.CharacterSearch.bind(this);
  }

  componentDidMount() {
    this.GetInitialCharacters();
  }

  GetInitialCharacters() {
    $.getJSON(`${API_URL}/characters?${auth}&limit=10`, result => {
      const characters = result.data.results;
     // console.log(characters);
      this.setState({ characters })
    });
  }

  handleCharacterSelect (character) {
    console.log (character);
    this.setState(
      {
        selectedCharacter:character
      });
  }
  CharacterSearch (term) {
    $.getJSON(`${API_URL}/characters?${auth}&limit=10&nameStartsWith=${term}`, result => {
      const characters = result.data.results;
      this.setState({ characters });  
    });
  }
//Normalde this.Setstate yok çünkü buradaki this $.getJSON nun dizi bunun Reacta ait olduğunu söylememiz lazım

  render() {
    if(!this.state.characters) return <h1> Loading </h1>
    //console.log ("İndex js içinde gelen data ",this.state.characters )
    return (

      <div className="container">
        <SearchBar onSearchButtonClick={this.CharacterSearch} />
        <CharacterList
          characters={this.state.characters}
          onCharacterSelect={this.handleCharacterSelect} /> 
        <Details character= {this.state.selectedCharacter || this.state.characters[0] }/>
      </div>
    );
  }
  //Property aracılığı ile veri aktardık ?? Html attiributesine stateleri atamak gibi 
}
export default Home;
