
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import Carousel from "../carousel/Carousel";
import NoResult from "../carousel/NoResult";
import Loading from "../carousel/Loading";
import "./SearchForm.css";

const SearchForm = () => {

    const [searchTerm, setSearchTerm] = useState("cat");
    const [imgSrc, setImgSrc] = useState("");
    const [imgAlt, setImgAlt] = useState("");
    const [loadingBool, setLoadingBool] = useState(true);
    const [noResult, setNoResult] = useState(false);



    const API_KEY = "fZ6vn4ZJ54E2bXK26t6e1XEdiIRA1vq3";
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=3&offset=0&rating=g&lang=en`;


    useEffect( () => {

            fetch(`${URL}`)
            .then((response) => response.json())
            .then( (response ) => {
                setImgSrc(response.data[0].images.downsized.url)
                setImgAlt(response.data[0].title)
                setLoadingBool(false);
                
            })        
            .catch((error) => console.log(error))
    
    }, []);

    const setUserInput = (value) => {
        setSearchTerm(value);
    };


    
  

    const sendGiphySearch = (event) => {
        event.preventDefault();
        const enteredInput = encodeURI(searchTerm);
        const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${enteredInput}&limit=1&offset=0&rating=g&lang=en`;
        fetch(`${URL}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if(response.data.length > 0)
                {
                    setImgSrc(response.data[0].images.downsized.url);
                    setImgAlt(response.data[0].title);
                    setNoResult(false);
                    console.log(imgSrc);
                    console.log(imgAlt);
                    
                }
                else if(response.data.length <= 0)
                {
                    setNoResult(true);
                }
            })        
            .catch((error) => console.log(error))
    };

    return (
        <div className="formWrapper">
            <form onSubmit={sendGiphySearch}>
                <SearchBar setUserInput={setUserInput} searchTerm={searchTerm}/>
                <SearchButton/>
            </form>
            {/* {loadingBool && <Loading/> }
            {!loadingBool && } */}
            {noResult && <NoResult/>}
            {!noResult && <Carousel imageSrc={imgSrc} imageAlt={imgAlt}/>}
        </div>

    )

};

export default SearchForm;