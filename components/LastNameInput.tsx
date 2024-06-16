"use client";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { alphabet } from "@/lib/utils";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

const LastNameInput: React.FC<> = () => {
  const [name, setName] = useState<string>("");
  const [carouselVisible, setCarouselVisible] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>();
  const [inverted, setInverted] = useState<boolean>(false);

  const lastNameButtonVisible = () => {
    setCarouselVisible((currVisible) => !currVisible);
  };

  function appendToName(index: number[]): void {
    setName(name.concat(alphabet[index[0]]));
    setInverted((prev) => !prev);
    setCarouselVisible(false);
  }

  function clearInput(): void {
    setName("");
    setCarouselVisible(false);
  }

  const handleSliderValue = (value: any) => {
    setSliderValue(value);
  };

  return (
    <>
      <Label>Last Name</Label>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          readOnly
          onClick={() => lastNameButtonVisible()}
          type="lastname"
          placeholder="Enter Name"
          value={name}
          className="mt-1"
        />
        <Button onClick={() => clearInput()}>←</Button>
      </div>
      {carouselVisible && (
        <>
          <Slider
            className="pt-4"
            max={51}
            min={0}
            step={1}
            onValueCommit={(e: any) => appendToName(e)}
            inverted={inverted}
            onValueChange={(e: any) => handleSliderValue(e)}
          />
          <h1 className="flex justify-center pt-1">{alphabet[sliderValue]}</h1>
        </>
      )}
    </>
  );
};

export default LastNameInput;
