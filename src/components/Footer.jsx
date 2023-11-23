import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { Colors } from "../Config";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <footer
      class="flex flex-col space-y-10 justify-center  "
      style={{ background: Colors.main, color: Colors.text }}
    >
        <div className="flex justify-center my-2"> 
         <img
        className="w-[200px] h-[100px] text-center"
        src="https://kidsstalk.in/assets/frontend/images/main-logo.webp"
        alt=""
      />
        </div>
       
      <nav class="flex justify-center flex-wrap gap-6 text-white font-medium">
   
        <a class="" href="#">
          Home
        </a>
        <a class="" href="#">
          About
        </a>
        <a class="" href="#">
          Services
        </a>
        <a class="" href="#">
          Media
        </a>
        <a class="" href="#">
          Gallery
        </a>
      
      </nav>

      <div class="flex justify-center space-x-5">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a
          href="https://messenger.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
      </div>
      <p class="text-center text-white font-medium">
        &copy; 2022 Company Ltd. All rights reservered.
      </p>
    </footer>
  );
}

export default Footer;
