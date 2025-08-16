"use client"

import React from "react";
import { Button } from "./button";
import { PhoneIcon } from "lucide-react";

interface PhoneCallButtonProps {
  className?: string
}

export default function PhoneCallButton({ className }: PhoneCallButtonProps) {
  return (
    <Button
    size={'xl'}
      onClick={() => {
        const phone = "tel:7272564467";
        window.location.href = phone;
      }}
      className={`${className} bg-blue-500 hover:bg-blue-600 font-bold pointer`}
    >
      <PhoneIcon className="my-auto" size={20} />{" "}
      <span>(727) 256-4467</span>
    </Button>
  );
}
