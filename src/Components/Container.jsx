import React from 'react';
import '../index.css';
import BlogPosts from './BlogPosts';
import HeaderIntro from './HeaderIntro';
import Sidebar from './Sidebar';

const Container = () => {
    return (
        <div class="maincont">
            <div class="container">
                <HeaderIntro />
                <div class="container cont-margin">
                    <div class="row">
                        <BlogPosts />
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Container;
