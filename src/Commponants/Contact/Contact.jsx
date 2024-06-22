import React from "react";

function Contact() {
  return (
    <>
      <div className="my-[120px]">
        <h2 className="text-[32px] text-[#040000] font-semibold text-center mb-[40px]">
          CONTACT US
        </h2>
        <div className="flex items-center justify-center flex-wrap">
          <div className="sm:w-[480px] w-[300px] h-[450px] mb-[-90px] sm:mr-[60px]">
            <form>
              <input
                type="name"
                placeholder="Name"
                className="w-[90%] h-[50px] px-[20px] text-[22px] mb-[20px] form-box"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="w-[90%] h-[50px] px-[20px] text-[22px] mb-[20px] form-box"
              />
              <input
                type="Email"
                placeholder="Email"
                className="w-[90%] h-[50px] px-[20px] text-[22px] mb-[20px] form-box"
              />
              <textarea
                name="message"
                id=""
                placeholder="Message"
                className="h-[135px] w-[90%] text-[20px] px-[20px] mb-[30px] form-box"
              ></textarea>
              <br />
              <button
                type="summbit"
                className="text-[15px] text-[#ffffff] bg-[#0355cc] py-[10px] px-[45px]"
              >
                SEND
              </button>
            </form>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3558.2028609415656!2d75.81999577401812!3d26.897056260765837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719033152129!5m2!1sen!2sin"
              className="sm:w-[450px] h-[360px]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
