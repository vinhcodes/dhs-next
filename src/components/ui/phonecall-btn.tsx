"use client"

import React from "react";
import { Button } from "./button";
import { PhoneIcon } from "lucide-react";

export default function PhoneCallButton() {
  return (
    <Button
    size={'lg'}
      onClick={() => {
        const phone = "tel:7272564467";
        window.location.href = phone;
      }}
      className="bg-orange-500 hover:bg-orange-600 font-bold pointer"
    >
      <PhoneIcon className="my-auto" size={20} />{" "}
      <span>(727) 256-4467</span>
    </Button>
  );
}
