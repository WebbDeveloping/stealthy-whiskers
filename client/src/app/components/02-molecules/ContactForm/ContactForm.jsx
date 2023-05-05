import React from "react";

function ContactForm() {
  return (
    <div className="relative flex justify-center bg-[#f4f8fa] p-0">
      <div className="mx-auto flex flex-col items-center">
        <div className="py-8">
          <div className="px-4 flex flex-col border rounded-sm gap-y-12 gap-x-4 min-w-auto py-9 bg-white border-white">
            <div className="flex flex-col gap-y-4">
              <div className="max-w-xl">
                <h2 className="text-xl font-extrabold uppercase">
                  Please fill out the
                  <br />
                  form below
                </h2>
              </div>
              <div className="max-w-sm">
                <div className="text-[#667479] text-md">
                  Contact us today to learn more about our wholesale
                  opportunities.
                  <br />
                </div>
              </div>
            </div>
            <div className="weight-medium text-black">
              <div className="m-0">
                <form
                  id="contact-page-form"
                  name="contact-page-form"
                  className="flex flex-col gap-y-8 gap-x-4"
                >
                  <div>
                    <label
                      for="name"
                      className="text-xs text-[#667479] uppercase mb-2 pb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="block border border-sm w-full h-[52px] text-[#667479] mb-7 py-4 px-5 text-sm rounded-sm"
                      maxlength="256"
                      name="name"
                      placeholder=""
                      id="name"
                    />
                    <label
                      for="email"
                      className="text-xs text-[#667479] uppercase mb-2 pb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="block border border-sm w-full h-[52px] text-[#667479] mb-7 py-4 px-5 text-sm rounded-sm"
                      maxlength="256"
                      name="email"
                      placeholder=""
                      id="email"
                    />
                    <label
                      for="email-2"
                      className="text-xs text-[#667479] uppercase mb-2 pb-2"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Example Text"
                      maxlength="5000"
                      id="field"
                      name="field"
                      className="block text-xs w-full overflow-auto border h-auto min-h-[150px] p-3  rounded-sm"
                    ></textarea>
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className="text-xs uppercase bg-[#080808] text-white py-4 px-5 rounded-full"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="relative third min-h-[275px] w-full mt-4">
              <img
                src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/6430882b01d44751cd40aaaf_ig-4.webp"
                className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                alt="Purrtection Helmet"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
