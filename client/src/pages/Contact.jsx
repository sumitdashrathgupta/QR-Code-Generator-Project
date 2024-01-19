import { useState } from "react";
// import { useAuth } from "../store/auth";

export const Contact = () => {
  const [contact, setContact] = useState({
    "first_name": "",
    "last_name": "",
    "email": "",
    "phone_no": "",
    "message": "",
  });

  // const { storeTokenInLS } = useAuth();

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleContactForm = async (e) => {
    e.preventDefault();
    console.log(contact);

    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      console.log("response data : ", response);

      if (response.ok) {
        setContact({
          "first_name": "",
          "last_name": "",
          "email": "",
          "phone_no": "",
          "message": "",
        });
        alert("Message Submit successful");
        // const res_data = await response.json();
        // storeTokenInLS(res_data.token);
        // console.log("res from server", res_data);
      } else {
        alert("Invalid Information")
        // console.log("error inside response ", "error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <main>
        <section>
          <div class="contact-form">
            <div class="first-container">
              <div class="info-container">
                <div>
                  <h3>Address</h3>
                  <p>H-block, Street no-17, Mumbai- 110001, India</p>
                </div>
                <div>
                  <h3>Lets Talk</h3>
                  <p>+91 9930XXXXXX</p>
                </div>
                <div>
                  <h3>General Support</h3>
                  <p>contact@qrcodegenerator.com</p>
                </div>
              </div>
            </div>
            <div class="second-container">
              <h2>Send Us A Message</h2>
              <form onSubmit={handleContactForm}>
                <div class="form-group" />
                <span class="form-group">
                  <label for="name-input"> Your name</label>
                  <input id="name-input" type="text" placeholder="First name" required name="first_name" autoComplete="off"
                    value={contact.first_name}
                    onChange={handleInput} />
                  <input type="text" placeholder="Last name" required name="last_name" autoComplete="off"
                    value={contact.last_name}
                    onChange={handleInput} /></span>
                <div />
                <div class="form-group">
                  <label for="email-input">Enter your email</label>
                  <input id="email-input" type="email" name="email" placeholder="Eg. example@gmail.com" required autoComplete="off"
                    value={contact.email}
                    onChange={handleInput} />
                </div>
                <div class="form-group">
                  <label for="phone-input">Enter phone number</label>
                  <input id="phone-input" type="text" placeholder="Eg. _1800 000000" required name="phone_no" autoComplete="off"
                    value={contact.phone_no}
                    onChange={handleInput} />
                </div>
                <div class="form-group">
                  <label for="message-textarea">Message</label>
                  <input class="textarea" id="message-textarea" placeholder="Write us a message" name="message" autoComplete="off"
                    value={contact.message}
                    onChange={handleInput}
                    required ></input>
                </div>
                <input type="submit" value="Send message" class="btn"></input>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer class="foo">
        <div class="footer">
          <div class="footer-row">
            <div class="footer-col">
              <img src="../image/logo/QR.png" alt="Qr" />
            </div>
            <div class="footer-col">
              <h4>Free QR code Generator</h4>
              <p>
                Create, Manage and Track all your QR codes in one.
              </p>
              <div class="icons">
                <i class='bx bxl-facebook-circle'></i>
                <i class='bx bxl-twitter'></i>
                <i class='bx bxl-linkedin'></i>
                <i class='bx bxl-github'></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>


  );
};