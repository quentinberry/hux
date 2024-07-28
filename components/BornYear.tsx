"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const BirthYear: React.FC<any> = () => {
  const [year, setYear] = useState<number>();
  const [aboveBelowVisible, setAboveBelowVisible] = useState<boolean>(false);

  const generateYear = () => {
    setYear(Math.floor(Math.random() * (2025 - 1900) + 1900));
    setAboveBelowVisible(true);
  };

  const generateAboveYear = () => {
    setYear(Math.floor(Math.random() * (2025 - year) + year));
  };

  const generateBelowYear = () => {
    setYear(Math.floor(Math.random() * (year - 1900) + 1900));
  };

  return (
    <>
      <Input
        readOnly
        type="yearborn"
        placeholder="Birthyear"
        value={year}
        className="mb-2"
      />
      <div className="flex w-full max-w-sm items-center space-x-3">
        <Button onClick={() => generateYear()}>GenerateDate</Button>
        {aboveBelowVisible && (
          <>
            <Button variant="outline" onClick={() => generateAboveYear()}>
              Above
            </Button>
            <Button variant="outline" onClick={() => generateBelowYear()}>
              Below
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default BirthYear;
