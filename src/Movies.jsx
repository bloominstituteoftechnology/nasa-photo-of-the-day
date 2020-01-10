import  React, {useState,useEffect} from "react";
import axios from "axios";
import {picList,personPicList} from "./data";
import  MovieInfo from "./MovieInfo";
import PersonInfo from "./PersonInfo";
import {Alert, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



const Movies = () =>{
    const[personData,setPersonData] = useState([])
    const[movieData,setMovieData] = useState([]);
    const [dropdownOpen, setOpen] = useState(false);
    const[option,setOption] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);


    useEffect(()=>{

        axios.get("https://swapi.co/api/films/")

        .then(res =>{
           
            setMovieData(res.data.results);
            console.log(res);
        })
    
        .catch(err=>{
            console.log(err,"no")
        });

        axios.get("https://swapi.co/api/people/")

        .then(res =>{
            
            setPersonData(res.data.results);
            console.log(res.data.results);
            

        })

        .catch(err =>{
            console.log("no")
        })

    },[]);

movieData.sort(function(a,b){
 return a.episode_id - b.episode_id;
});
    
   const handleClickforMovies = (e)=>{
       setOption(false);
   }

   const handleClickforPeople = (e)=>{
       setOption(true);
}



   

   


 
if(!option){
    
    return(
       

       <div> 
            <Alert color="warning">
        This api doesnt have all the movies or characters!!!!!!
      </Alert>
           <h1>Movie Info</h1>

    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret color="warning">
     Choose
    </DropdownToggle>
    <DropdownMenu>
     
    
      <DropdownItem onClick = {handleClickforMovies}>Movie Info</DropdownItem>
      <DropdownItem divider/>
      <DropdownItem onClick = {handleClickforPeople}>People Info</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
  
      
  
        <div className = "mainContainer">
           {movieData.map((movie,idx)=>{
               return(
                <MovieInfo 
                src = {picList[movie.episode_id]} 
                key ={idx} 
                title = {movie.title}
                episode = {movie.episode_id}
                description = {movie.opening_crawl} 
                director = {movie.director}
                release = {movie.release_date}
                
                />
               )
           })}
        </div>
  </div>
    );


}
    return(
        <div>
            <h1>Person Info</h1>
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret color="warning">
    Choose
    </DropdownToggle>
    <DropdownMenu>
    

    <DropdownItem onClick = {handleClickforMovies}>Movie Info</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem onClick = {handleClickforPeople}>People Info</DropdownItem>
    </DropdownMenu>
    </ButtonDropdown>
    <div className = "mainContainer">

  {personData.map((person,idx)=>{
      return<PersonInfo 
      src = {personPicList[idx]} 
      gender = {person.gender}
      birthYear = {person.birth_year}
      name = {person.name}
      
      />
      
  })}


    </div>
    </div>

    )



}

export default Movies;