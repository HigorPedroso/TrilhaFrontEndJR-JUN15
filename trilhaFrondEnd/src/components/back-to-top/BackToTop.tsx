import { useEffect, useState } from "react";
import "./BackToTop.css";
import { IconContext } from "react-icons";
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {


    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    
      <div className={`${isVisible ? 'top' : 'top--invisible'}`}>
      <a href="#" className="top__btn" onClick={scrollToTop}>
        <IconContext.Provider
          value={{ className: "top__btn-icon", size: "30px" }}
        >
          <div>
            <IoIosArrowUp />
          </div>
        </IconContext.Provider>
      </a>
    </div>
    
  );
};

export default BackToTop;
