
export const Home = () => {
  return (
    <>
      <main>
        <section id="Home">
          <div class="main-home">
            <div class="jass1">
              <h1 class="jass2">Create, Manage and Track all your <span class="jass3"> QR codes</span> in one</h1>
              <p class="jass4">Easily generate, manage and statistically track your QR codes.
              </p>
              <button class="btn-jss5"><a href="Qrcode.html">Create QR Code</a></button>
            </div>
          </div>
        </section>
        <section id="Step">
          <section class="animation-card">
            <div class="step">
              <h2>How to make a QR Code</h2>
              <p>Generate, Customize, Download your QR Code in three simple steps.</p>
            </div>
            <div class="animation">
              <div class="box">
                <div class="front-face">
                  <div class="icon">
                    <i class='bx bx-qr-scan'></i>
                  </div>
                  <span>Step 1</span>
                </div>
                <div class="back-face">
                  <span>Create</span>
                  <p>
                    Make a free QR Code on our QR Code generator by entering the URL or uploading a file. To
                    generate a dynamic QR Code, log-in to our QR Code maker, select QR Code type and enter
                    the
                    URL.
                  </p>
                </div>
              </div>
              <div class="box">
                <div class="front-face">
                  <div class="icon">
                    <i class='bx bxs-customize'></i>
                  </div>
                  <span>Step 2</span>
                </div>
                <div class="back-face">
                  <span>Customize</span>
                  <p>
                    Design the QR Code color, shape and background. Add your company logo to the QR Code.
                    Lastly, add a QR Code frame and CTA. Your custom QR Code is ready for downloading.
                  </p>
                </div>
              </div>
              <div class="box">
                <div class="front-face">
                  <div class="icon">
                    <i class='bx bx-download'></i>
                  </div>
                  <span>Step 3</span>
                </div>
                <div class="back-face">
                  <span> Download</span>
                  <p>
                    Check QR Code functionality and download it in the required format. We recommend using
                    high
                    resolution QR Code formats ( .png). Download and get started with your QR Code campaign.
                  </p>
                </div>
              </div>
            </div>
          </section>
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
  )
};
