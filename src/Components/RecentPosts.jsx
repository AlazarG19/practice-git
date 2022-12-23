import React from 'react';

const RecentPosts = () => {
    const recentPosts = [
        {
            img:'../Images/post1.jpg',
            title: 'What are the advantages of being a freelancer?',
            date: 'April 23, 2021'
        },
        {
            img:'../Images/post2.jpg',
            title: 'Tips for Answering the Top 5 Freelance Job Interview...',
            date: 'April 23, 2021'
        },
        {
            img:'../Images/post3.jpg',
            title: 'Hire The Best Freelancers From Around The World',
            date: 'April 23, 2021'
        },
        {
            img:'../Images/post4.jpg',
            title: 'Can I make a career out of freelancing?',
            date: 'April 23, 2021'
        },
    ]
    return (
        <div class="recentPostCont">
            <h2>Recent Posts</h2>
                {recentPosts.map(post =>{
                    return(
                        <div class="recentbox">
                            <div class="recentpreview">
                                <img src={post.img} alt=""/>
                            </div>
                            <div class="posttext">
                                <h4>{post.title}</h4>
                                <div class="recentdate">
                                    <p>{post.date}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
    );
}

export default RecentPosts;
