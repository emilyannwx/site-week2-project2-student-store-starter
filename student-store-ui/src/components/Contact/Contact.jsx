import "./Contact.css"
import pic from "../../assets/contact.png"
export default function Contact() {
    return (
      <div className="Contact" id="contact">
        <div className="content">
          <h3>Contact Us </h3>
          <div className = "summary">
          <ul className="info">
            <li>
              <span>Email:</span> code@path.org
            </li>
            <li>
              <span>Phone:</span> 1-800-CODEPATH
            </li>
            <li>
              <span>Address:</span> 123 Fake Street, San Francisco, CA
            </li>
          </ul>
            <div className = "media">
              <img src = {pic} alt = "phone/email"/>
            </div>
          </div>
        </div>
      </div>
    )
  }