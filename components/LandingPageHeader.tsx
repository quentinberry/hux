"use server";

import React from "react";

function LandingPageHeader() {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Horrible UX
      </h1>
      <p className="w-[450px] leading-7 [&:not(:first-child)]:mt-6">
        This signup form demonstrates horrible UX decisions. I advise you to try
        filling out the form below with your real information to experience the
        madness in full. No data will be stored anywhere. Good luck trying to
        reamain calm.
      </p>
      <br></br>
    </>
  );
}

export default LandingPageHeader;
