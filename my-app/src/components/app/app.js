import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';
const App=()=>{
    const data=[
        {label:"going to learn react",important:true, id:1},
        {label:"going to learn angular",important:false, id:2},
        {label:"going to learn vue.js",important:false, id:3},
        4
    ];
    return(
       <div className="app">
            <AppHeader/>
        <div className="search-panel d-flex" >
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList posts={data}/>
        <PostAddForm/>
       </div>
    )
}
export default App;