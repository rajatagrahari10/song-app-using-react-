import React, {Component} from 'react';
import {connect} from 'react-redux';
import selectSong from '../actions/index';

class SongList extends Component{
    renderList(){
        return this.props.songs.map((song) => { 
            return (
                
                <div key={song.songKey}>
                    <div>
                        <button onClick={ () => this.props.selectSong(song)} className="buttona">
                            Select
                        </button>
                    </div>
                    <div>
                      {song.title} 
                    </div>
 ___________________________________________________________
                </div>
            )
        })
    }
    
    
    render(){
        return (
            <div className="bg-img">
                <h3>Song List</h3>
                <h6> {this.renderList()}</h6>
            </div>
        )
    }
}

// we can named it by any function name like getMyStates for this mapStateToProps function 
//we can take any argument like state1
//this mapStateToProps function is called all of the data which is indide in our redux store reducers
const mapStateToProps=(state1)=>{
    return {songs:state1.songs};

};

// connect is a key word to get data from Provider and Provider get all data from store-reducers
// connect and Provider are connected always
export default connect(mapStateToProps, {selectSong} ) (SongList);