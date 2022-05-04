import "./index.css";
import { analyticsImg } from "./img";
// import img from './assets/analytics.svg';

function App() {
  // console.log(analyticsImg);
  return (
    <div className="container">
      <div className="lift">
        <h3 className="titleS">nest agency</h3>
        <div className="social">
          <h3 className="titleS">SOCTIOL MEDIA ACTIVATION</h3>
        </div>
        <div className="about">
          <h3 className="titleS">ABOUT US</h3>
          <p className="text">
            We are a team of 3 young professionals who are passionate about hwat
            we do.
          </p>
          <div className="humans">
            <div className="human">
              <img src={analyticsImg} alt="img" />
              {/* <img src={img} alt="img" /> */}
              <div className="name">
                <h4>Elizabeth Kelley</h4>
                <p>Brand Developer, Social Marketer</p>
              </div>
            </div>
            <div className="human">
              <img src="" alt="img" />
              <div className="name">
                <h4>Sophia Christensen</h4>
                <p>Content Developer, Project Manager</p>
              </div>
            </div>
            <div className="human">
              <img src="" alt="img" />
              <div className="name">
                <h4>Mae Valdez</h4>
                <p>Designer, Web Developer</p>
              </div>
            </div>
          </div>
          <h3 className="titleS">WHY CHOOSE US?</h3>
          <p className="texts">
            Our team specializes in social activation and web designing,
            offering a high quality service in accordance with modern trends and
            technology.
          </p>
          <p className="texts">
            Our team is a small group of dynamic and skilled professional, which
            allows us a freedom to improvise and offer our clients a fresh
            perspective, therefor our clients are always one step ahead with us.
          </p>
          <p className="texts">
            We thoroughly research for the projects we take on tith new approach
            in marketing , desing and techonogy for every client.
          </p>
        </div>
        <div className="money">
          <h3 className="titleS">$8.888.888</h3>
        </div>
        <div className="contact">
          <img src="" alt="img" />
          <h4 className="titleS">9898-8888 / 8989-8888</h4>
        </div>
      </div>
      <div className="right">
        <div className="line"></div>
        <div className="whatWe">
          <h3>WHAT WE OFFER</h3>
        </div>
        <div className="classification">
          <div className="group">
            <img src="" alt="icon" />
            <h5>Content Boost</h5>
          </div>
          <div className="group">
            <img src="" alt="icon" />
            <h5>Facebook Live</h5>
          </div>
          <div className="group">
            <img src="" alt="icon" />
            <h5>Facebook Contests</h5>
          </div>
          <div className="group">
            <img src="" alt="icon" />
            <h5>Group Development</h5>
          </div>
          <div className="group">
            <img src="" alt="icon" />
            <h5>Marketing Consulting</h5>
          </div>
          <div className="group">
            <img src="" alt="icon" />
            <h5>Photo Shoot</h5>
          </div>
          <div className="group">
            <img src="" alt="icon" />
            <h5>Magazine Articles</h5>
          </div>
          <div className="group">
            <img src="" alt="icon" />
            <h5>+Like Growth</h5>
          </div>
          <div className="group">
            <img src="" alt="icon" />
            <h5>+Post Reach</h5>
          </div>
          <div className="group">
            <img src="" alt="icon" />
            <h5>Podcast</h5>
          </div>
          <div className="group">
            <img src="" alt="icon" />
            <h5>Messenger Bot</h5>
          </div>
          <div className="group">
            <img src="" alt="icon" />
            <h5>Analytics</h5>
          </div>
          <div className="group">
            <img src="" alt="icon" />
            <h5>GIF Post</h5>
          </div>
          <div className="group">
            <img src="" alt="icon" />
            <h5>Animated Video</h5>
          </div>
          <div className="group">
            <img src="" alt="icon" />
            <h5>Infographics</h5>
          </div>
          <div className="group">
            <img src="" alt="icon" />
            <h5>Posters</h5>
          </div>
        </div>
        <div className="outPartners">
          <h3>OUT PARTNERS & CLIENTS</h3>
        </div>
        <div className="classification">
          {/* <img src="anarerdene" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
