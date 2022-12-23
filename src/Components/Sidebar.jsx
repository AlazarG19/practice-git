import React from 'react';

const Sidebar = () => {
    return (
        <div class="col-lg-3 sidebar">
            <div class="wrapper recentPostCont">
              <div id="sidebar">
                <div class="recentbox">
                    <h2>Recent Posts</h2>
                    <div class="thumbnailbox">
                      <img class="card-img-left recentimagemodification" src="./images/post1.jpg" alt="Card" />
                      <div class="card-body margintop">
                        <p class="card-title">What are the advantages of being a freelancer?</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
           
            <div class="wrapper recentPostCont boxmodify">
              <div id="sidebar">
                <div class="sidebar-header">
                    <h3>Catagories</h3>
                    <ul class="catlinks">
                      <li>Freelancer</li>
                      <li>Information</li>
                      <li>Interview</li>
                    </ul>
                </div>
              </div>
            </div> 
            <div class="wrapper recentPostCont boxmodify">
              <div id="sidebar">
                <div class="sidebar-header">
                    <h3>Tag</h3>
                    <div class="tagcont nxtbtn">
                      <p>App</p>
                    </div>
                </div>
              </div>
            </div>  
          </div>
    );
}

export default Sidebar;
