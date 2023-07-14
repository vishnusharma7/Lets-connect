import "./rightBar.scss"

function RightBar() {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestion for you</span>
          <div className="user">
            <div className="userInfo">
            <img src="https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg" alt="" />
            <span>Mohan</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
            <img src="https://img.freepik.com/premium-vector/happy-young-woman-watching-into-rounded-frame-isolated-white-illustration-render-style_365941-118.jpg" alt="" />
            <span>Riya</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activites</span>
          <div className="user">
            <div className="userInfo">
            <img src="https://storage.prompt-hunt.workers.dev/clgzz7hfn0001l408xyi9gg7a_1" alt="" />
           <p>
           <span>Roy</span> Change their cover picture
           </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
            <img src="https://cdn.dribbble.com/users/1176657/screenshots/15468294/media/34af996ddff444391edab94abcf3c7f3.png?resize=400x0" alt="" />
           <p>
           <span>Jhon</span> Change their cover picture
           </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
            <img src="https://i.ytimg.com/vi/YqETAraUb2M/maxresdefault.jpg" alt="" />
           <p>
           <span>Chris</span> Change their cover picture
           </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQVhVbi4ekg4ZbN7AhKqTVucL61bnKiW9pA&usqp=CAU" alt="" />
           <p>
           <span>Stark</span> Change their cover picture
           </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8UoRrNMoXQA2UB3lEefyw9pg_EQYbXByTxKc0gXIAkT8_knq3hh8kzricRT7BLDT_7w&usqp=CAU" alt="" />
           <div className="online" />
           <span>Steve</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img src="https://img.freepik.com/premium-vector/young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_365941-687.jpg" alt="" />
           <div className="online" />
           <span>Nick</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img src="https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg" alt="" />
           <div className="online" />
           <span>James</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjXB6-JYWFhnr19d8tzw1VbRnI372UDYD9s1Ge2GSUbhCFXTWRFCqO2kuXPYqk2C2PwbY&usqp=CAU" alt="" />
           <div className="online" />
           <span>Krane</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpCbfsr5UiMu1GunzWZG7oVLTxIlG67uwAIAWF7deRiUGRy1DFk7hMxtpJFM84kR4qqE4&usqp=CAU" alt="" />
           <div className="online" />
           <span>Rick</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
