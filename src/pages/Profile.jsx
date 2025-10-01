import { Link } from "react-router-dom";
import TypingEffect from "../components/TypingEffect";
import Header2 from "../components/Header2";
import Footer2 from "../components/Footer2";
const Profile=()=>{

    return(
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <Header2 />
          <section className="text-white py-16 ">
           <div className="ml-24">
              <div>
                  <TypingEffect />
              </div>
              <h1 className="tracking-wider leading-loose text-left text-4xl  cursor-default md:text-5xl font-bold mb-4"><span className="leading-normal">Hi There,<br/>I'm Ayush Jain</span></h1>
              <h1 className="mb-6 cursor-default text-lg md:text-xl"></h1>
              
              <Link to="/about" className="text-gray-700 hover:text-white font-semibold ">About</Link>
              <div className="socials">
                
              </div>
            </div>
          </section>
        </div>
    );
}
export default Profile;