"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { alphabet } from "@/lib/utils";

interface ButtonAlphabetProps {
  setStoredName: (name: string) => void;
}

const ButtonFirstName: React.FC<ButtonAlphabetProps> = ({ setStoredName }) => {
  const [name, setName] = useState<string>("");
  const [realShuffledArray, setRealShuffledArray] = useState<string[]>([]);

  // setStoredName everytime name updates. This is passed to parent component
  useEffect(() => {
    setStoredName(name);
  }, [setStoredName, name]);

  const shuffleArray = () => {
    setRealShuffledArray([...alphabet].sort(() => 0.5 - Math.random()));
  };

  // shuffles Array on initial load
  useEffect(() => {
    shuffleArray();
  }, []);

  function appendToName(index: number): void {
    setName(name.concat(realShuffledArray[index]));
    shuffleArray();
  }

  function deleteFromName(): void {
    setName("");
  }

  return (
    <div className="mt-1">
      {realShuffledArray.map((letter: string, i: number) => (
        <Button
          key={i}
          variant="ghost"
          size={"sm"}
          onClick={() => appendToName(i)}
        >
          {letter}
        </Button>
      ))}
      <Button variant="ghost" onClick={() => deleteFromName()}>
        ←
      </Button>
    </div>
  );
};

export default ButtonFirstName;
