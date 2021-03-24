import {combineReducers} from 'redux';


const songsReducer =()=> {
    // return in a form of array
    return [
        {   songKey: 1,
            title: 'tere sang yara',
            duration:'4:10'
        },
        {
            songKey: 2,
            title: 'dhadak',
            duration:'2:50'
        },
         {
            songKey: 3,
            title: 'dil diya galla',
            duration:'3:05'
        },
        {
            songKey: 4,
            title: 'tera hua',
            duration:'6:30'
        }
    ]
};

//in starting it will be null when we start an app and the second argument is the action object
const selectedSongReducer =(selectedSong=null, action)=> {
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};


export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
});