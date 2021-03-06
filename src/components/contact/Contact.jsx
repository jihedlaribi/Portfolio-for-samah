import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from 'emailjs-com';
import { useContext,useRef,useState } from "react";
import { ThemeContext } from "../../context";



const Contact = () => {
 
 const formRef = useRef();

 const [done, setDone] =useState(false)
 const theme = useContext(ThemeContext);
 const darkMode = theme.state.darkMode;
 const handleSubmit = (e) => {
   e.preventDefault()
   
   emailjs.sendForm('service_53pp2gf', 'template_3lbcde8', formRef.current, 'Q9I9TyE1Q-wcmkKGt')
   .then((result) => {
       console.log(result.text);
       setDone(true)
   }, (error) => {
       console.log(error.text);
   });

 }

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Le secret de notre réussite "La communication"</h1>
          <div className="c-info">
            <a className="c-info-item" href="tel:+21695898418" >
              <img src={Phone} alt="" className="c-icon" />
             +21695898418
            </a>
            <a className="c-info-item" href="mailto:hamdisamah7@gmail.com">
              <img className="c-icon" src={Email} alt="" />
              hamdisamah7@gmail.com
            </a>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Kebili
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Quelle est ton histoire?</b> Entrer en contact. Toujours disponible pour vous.
           
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
          <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nom et prénom" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Sujet" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          {done &&"Merci..."}
          </form>
      
        </div>
      </div>
    </div>
  );
};

export default Contact;