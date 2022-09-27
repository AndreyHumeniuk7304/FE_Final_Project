import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="panel">
        <div className="contact-card">
          <div className="contact-card__header">
            <span className="contact-card__call-us">
              <div className="contact-card__expand float-right"></div>
              <svg
                className="contact-card__icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
                  stroke="#000000"
                />
              </svg>
              Call Us
            </span>
          </div>
          <div className="contact-card__panel-collapse">
            <div>
              <span className="contact-card__text">
                Up for a chat? Feel free to call us on{" "}
                {
                  <b>
                    <a className="contact-card__num" href="tel:0800 024 8794">
                      0800 024 8794
                    </a>
                  </b>
                }{" "}
                and the friendly voice on the other end of the phone will give
                you a helping hand with any questions you might have. Please
                note, phone lines are only open during office hours.
              </span>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card__header">
            <span className="contact-card__call-us">
              <div className="contact-card__expand float-right"> </div>
              <svg className="contact-card__icon" viewBox="0 0 60 72">
                <path
                  id="Mail"
                  d="M58.0034485,8H5.9965506c-3.3136795,0-5.9999995,2.6862001-5.9999995,6v36c0,3.3137016,2.6863203,6,5.9999995,6
	h52.006897c3.3137016,0,6-2.6862984,6-6V14C64.0034485,10.6862001,61.3171501,8,58.0034485,8z M62.0034485,49.1108017
	L43.084549,30.1919994l18.9188995-12.0555992V49.1108017z M5.9965506,10h52.006897c2.2056007,0,4,1.7943001,4,4v1.7664003
	L34.4677505,33.3134003c-1.4902,0.9492989-3.3935013,0.9199982-4.8495998-0.0703011L1.9965508,14.4694996V14
	C1.9965508,11.7943001,3.7910507,10,5.9965506,10z M1.9965508,16.8852005L21.182251,29.9251003L1.9965508,49.1108017V16.8852005z
	 M58.0034485,54H5.9965506c-1.6473999,0-3.0638998-1.0021019-3.6760998-2.4278984l20.5199013-20.5200024l5.6547985,3.843401
	c1.0859013,0.7383003,2.3418007,1.1083984,3.5995998,1.1083984c1.1953011,0,2.3925018-0.3339996,3.4463005-1.0048981
	l5.8423996-3.7230015l20.2961006,20.2961025C61.0673485,52.9978981,59.6508713,54,58.0034485,54z"
                />
              </svg>
              Email Us
            </span>
          </div>
          <div className="contact-card__panel-collapse">
            <div>
              <span className="contact-card__text">
                Get in touch via our email,{" "}
                {
                  <a
                    className="contact-card__link"
                    href="mailto: helpdesk@watchshop.com"
                  >
                    helpdesk@watchshop.com
                  </a>
                }
                , any time of the day or night and our customer support team
                will give you a bell back during office hours. We endeavour to
                get back to you within 48 hours (not including weekends and bank
                holidays), but please note there may be a delay during peak
                times!
              </span>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-card__header">
            <span className="contact-card__call-us">
              <div className="contact-card__expand float-right"></div>
              <svg className="contact-card__icon" viewBox="0 0 60 72">
                <path
                  d="M44.348,12.793H2.652C1.189,12.793,0,13.983,0,15.446v43.761l9.414-9.414h34.934c1.463,0,2.652-1.19,2.652-2.653V15.446
		C47,13.983,45.811,12.793,44.348,12.793z M11,22.793h12c0.553,0,1,0.448,1,1s-0.447,1-1,1H11c-0.553,0-1-0.448-1-1
		S10.447,22.793,11,22.793z M36,38.793H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h25c0.553,0,1,0.448,1,1S36.553,38.793,36,38.793z
		 M36,31.793H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h25c0.553,0,1,0.448,1,1S36.553,31.793,36,31.793z"
                />
                <path
                  d="M57.348,0.793H12.652C11.189,0.793,10,1.983,10,3.446v7.347h34.348c2.565,0,4.652,2.087,4.652,4.653v25.347h1.586H60V3.446
		C60,1.983,58.811,0.793,57.348,0.793z"
                />
              </svg>
              Chat to Us
            </span>
          </div>
          <div className="contact-card__panel-collapse">
            <div>
              <span className="contact-card__text">
                Drop a member of our customer support team a line via our live
                chat function right here on our website. Simply click the ‘Chat’
                pop up in the corner of your screen and our team will be happy
                to help you with any queries you might have. Please note, live
                chat is only available during office hours.
              </span>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-card__header">
            <span className="contact-card__call-us">
              <div className="contact-card__expand float-right"></div>
              <svg className="contact-card__icon" viewBox="0 0 30 35">
                <path
                  d="M19.812,20.062c-0.037,0.069-0.111,0.137-0.111,0.2v6.392c0,1.056-0.889,1.875-1.94,1.875H4.394
			c-1.055,0-1.931-0.82-1.931-1.875V9.537c0-1.054,0.876-1.938,1.931-1.938h13.364c0.385,0,0.741,0.128,1.04,0.323l2.146-2.377
			c-0.377-0.224-0.814-0.34-1.287-0.34H2.393C1.063,5.205,0,6.271,0,7.603v20.949c0,1.389,1.107,2.51,2.495,2.51h17.159
			c1.39,0,2.508-1.121,2.508-2.51V17.484l-2.07,2.319C20.003,19.904,19.916,19.99,19.812,20.062z"
                />
                <path
                  d="M9.901,19.022H6.213H5.646c-0.681,0-1.23,0.551-1.23,1.229c0,0.678,0.55,1.23,1.23,1.23H7.82h0.681h1.401
			c0.545,0,1.005-0.36,1.168-0.848c0.009-0.131,0.03-0.271,0.064-0.396c-0.003-0.617-0.458-1.121-1.053-1.205
			C10.022,19.025,9.962,19.022,9.901,19.022z"
                />
                <path
                  d="M23.08,5.309l-7.905,8.811l-0.535,0.597l4.278,3.836l0.535-0.596l7.902-8.81l0.639-0.709l-4.279-3.838L23.08,5.309z
			 M22.645,9.294l-5.098,5.681c-0.064,0.071-0.152,0.114-0.249,0.12c-0.097,0.005-0.188-0.028-0.261-0.092l-0.254-0.227
			c-0.146-0.133-0.158-0.36-0.025-0.509l5.098-5.682c0.062-0.071,0.152-0.114,0.25-0.119c0.094-0.005,0.188,0.028,0.26,0.091
			l0.25,0.228C22.766,8.918,22.775,9.146,22.645,9.294z M24.124,6.595l0.252,0.226c0.146,0.132,0.16,0.358,0.028,0.506
			c0,0-0.002,0.001-0.002,0.002l-0.44,0.494c-0.019,0.02-0.038,0.037-0.06,0.052c-0.057,0.04-0.121,0.064-0.189,0.068
			c-0.096,0.005-0.188-0.028-0.26-0.092l-0.254-0.226c-0.07-0.063-0.113-0.153-0.118-0.249c-0.007-0.095,0.026-0.189,0.092-0.26
			l0.442-0.494C23.748,6.476,23.979,6.462,24.124,6.595z"
                />
                <polygon points="24.518,3.707 24.128,4.139 28.404,7.978 28.795,7.543 29.458,6.805 25.18,2.967 		" />
                <path
                  d="M31.178,3.023l-2.426-2.175c-0.245-0.22-0.566-0.334-0.896-0.316s-0.641,0.166-0.858,0.411l-1.431,1.594l4.276,3.837
			l1.431-1.594C31.732,4.27,31.691,3.482,31.178,3.023z M29.757,4.775l-2.592-2.325l0.749-0.834l2.591,2.325L29.757,4.775z"
                />
                <path
                  d="M13.487,21.139l4.917-2.015l-4.274-3.835l-1.473,5.107c-0.065,0.229,0.005,0.476,0.182,0.633
			C13.016,21.187,13.267,21.231,13.487,21.139z M14.519,16.652l2.485,2.229l-1.932,0.792l-1.131-1.014L14.519,16.652z"
                />
              </svg>
              Write to Us
            </span>
          </div>
          <div className="contact-card__panel-collapse">
            <div>
              <span className="contact-card__text">
                In our digital-first world, it’s always nice to receive a bit of
                snail mail, and we would be totally chuffed if you wrote to us!
                Grab a pen, dust off your envelopes and send a letter to our
                office (address found below) to put a smile on the faces of our
                customer support team.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
