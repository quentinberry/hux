"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const BirthYear: React.FC<any> = () => {
  const [year, setYear] = useState<number>();

  const generateYear = () => {
    setYear(Math.floor(Math.random() * (2024 - 1900) + 1900));
  };

  return (
    <>
      <Input
        // onClick={() => firstNameButtonVisible()}
        readOnly
        type="yearborn"
        placeholder="Birthyear"
        value={year}
        className="mb-2"
      />
      <Button className="" onClick={() => generateYear()}>
        GenerateDate
      </Button>
    </>
  );
};

export default BirthYear;
