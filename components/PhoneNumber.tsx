"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";

function PhoneNumber() {
  const [storedNumber, setStoredNumber] = useState<string>("");

  const keyRemap: { [key: string]: string } = {
    KeyA: "0",
    KeyB: "1",
    KeyC: "2",
    KeyD: "3",
    KeyE: "4",
    KeyF: "5",
    KeyG: "6",
    KeyH: "7",
    KeyI: "8",
    KeyJ: "9",
  };

  const remapKeyLayoutForPhoneNumber = (pressedKey: any) => {
    return Object.keys(keyRemap).includes(pressedKey)
      ? keyRemap[pressedKey]
      : null;
  };

  const whichKeydown = (keyDown: string) => {
    if (keyDown === "Backspace") {
      setStoredNumber((prev) => prev.slice(0, -1));
    } else if (!Object.keys(keyRemap).includes(keyDown)) {
      toast(
        "💡 Hint: Maybe try to type 'A' for '0', 'B' for '1' yada yada yada"
      );
      setStoredNumber(storedNumber);
    } else {
      const remappedKey = remapKeyLayoutForPhoneNumber(keyDown);
      if (remappedKey) {
        setStoredNumber((prev) => prev + remappedKey);
      }
    }
  };

  return (
    <div>
      <Label htmlFor="phoneNumber">Phone number</Label>
      <Input
        onKeyDown={(e) => whichKeydown(e.code)}
        value={storedNumber}
        placeholder="Enter phone number"
      />
    </div>
  );
}

export default PhoneNumber;
