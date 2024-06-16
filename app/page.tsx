"use client";
import ButtonAlphabet from "@/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Suspense, useState } from "react";
import Loading from "./loading";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [storedName, setStoredName] = useState<string>("");
  const [buttonVisible, setButtonVisible] = useState<boolean>(false);

  const firstNameButtonVisible = () => {
    setButtonVisible((currVisible) => !currVisible);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to our service</CardDescription>
        </CardHeader>
        <CardContent>
          <Label htmlFor="firstname">First Name</Label>
          <Input
            onClick={() => firstNameButtonVisible()}
            readOnly
            type="firstname"
            placeholder="Enter Name"
            value={storedName}
          />
          {buttonVisible && <ButtonAlphabet setStoredName={setStoredName} />}
        </CardContent>
      </Card>
    </main>
  );
}
