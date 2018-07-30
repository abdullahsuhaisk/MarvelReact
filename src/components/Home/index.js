import React from 'react';
import SearchBar from '../search-bar';
import CharacterList from '../character-list';
import Detail from '../details';

class Home extends React.Component {
  render() {
    return( 
      <div className="container">
      <SearchBar />
      <CharacterList />
      <Detail />
      </div>
    );
  }
}
export default Home;
