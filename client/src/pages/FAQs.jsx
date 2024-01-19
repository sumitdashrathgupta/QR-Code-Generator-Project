export const FAQs = () => {
  return (
    <>
      <main>
        <section>
          <div class="container-qa">
            <div class="qas-title">
              <h2>FAQs</h2>
              <p> If you have any questions that you can't answer through our FAQs, don't hesitate to contact our
                team.</p>
            </div>
            <div class="wrapperr">
              <button class="toggle">
                What is a QR code?
                <i class="fas fa-plus icon"></i>
              </button>
              <div class="content">
                <p>Simply put, we can say that the QR code is the natural evolution of the barcode. Its name
                  derives from "Quick Response Code", due to the speed at which they can be scanned. This code
                  allows for easy access to different information through a mobile device.</p>
              </div>
            </div>
            <div class="wrapperr">
              <button class="toggle">
                What are QR codes useful for?
                <i class="fas fa-plus icon"></i>
              </button>
              <div class="content">
                <p>They are as useful as all the different types of content they can offer. In fact, in recent
                  years, this type of code is becoming more widely accepted among all kinds of people.</p>
              </div>
            </div>
            <div class="wrapperr">
              <button class="toggle">
                How many types of QR codes are there?
                <i class="fas fa-plus icon"></i>
              </button>
              <div class="content">
                <p>Many. There are as many types of the different kinds of content that may be associated with
                  them. At QRfy, we offer you a tool to create a wide variety of them: Wi-Fi, website, vCard,
                  PDF, images, videos, apps and menus. And all in the simplest way.</p>
              </div>
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