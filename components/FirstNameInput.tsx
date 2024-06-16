"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import ButtonFirstName from "./ButtonsFirstName";
import { Separator } from "./ui/separator";

const FirstNameInput: React.FC<any> = () => {
  const [storedName, setStoredName] = useState<string>("");
  const [buttonVisible, setButtonVisible] = useState<boolean>(false);

  const firstNameButtonVisible = () => {
    setButtonVisible((currVisible) => !currVisible);
  };

  return (
    <>
      <Label htmlFor="firstname">First Name</Label>
      <Input
        onClick={() => firstNameButtonVisible()}
        readOnly
        type="firstname"
        placeholder="Enter Name"
        value={storedName}
        className="mt-1"
      />
      {buttonVisible && <ButtonFirstName setStoredName={setStoredName} />}
    </>
  );
};

export default FirstNameInput;
