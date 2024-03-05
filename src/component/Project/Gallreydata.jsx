import Gallery from './Gallery';
import React from 'react';

const galleryImages = [
    {
        img: "imgs/Projects/Post/post1.png"
    },
    {
        img: "imgs/Projects/Post/post2.png"
    },
    {
        img: "imgs/Projects/Post/post3.png"
    },
    {
        img: "imgs/Projects/Post/post4.png"
    },
    {
        img: "imgs/Projects/Post/post5.png"
    },
    {
        img: "imgs/Projects/Post/post6.png"
    }, {
        img: "imgs/Projects/Post/post7.png"
    }, {
        img: "imgs/Projects/Post/post8.png"
    }, {
        img: "imgs/Projects/Post/post9.png"
    }, {
        img: "imgs/Projects/Post/post10.png"
    }, {
        img: "imgs/Projects/Post/post11.png"
    }, {
        img: "imgs/Projects/Post/post12.png"
    }, {
        img: "imgs/Projects/Post/post13.png"
    }, {
        img: "imgs/Projects/Post/post14.png"
    },
    {
        img: "imgs/Projects/Post/post15.png"
    }, {
        img: "imgs/Projects/Post/post16.jpg"
    },
    {
        img: "imgs/Projects/Post/post17.jpg"
    },
    {
        img: "imgs/Projects/Post/post18.jpg"
    },
    {
        img: "imgs/Projects/Post/post19.jpg"
    },
    {
        img: "imgs/Projects/Post/post20.jpg"
    },
    {
        img: "imgs/Projects/Post/post21.jpg"
    },
    {
        img: "imgs/Projects/Post/post22.jpg"
    },
]
function Gallreydata() {
    return (
        <div className="App" style={{marginBottom:"12px"}}>
           <Gallery
                galleryImages={galleryImages}
            />
        </div>
    );
}

export default Gallreydata;