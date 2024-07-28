import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FirstNameInput from "@/components/FirstNameInput";
import LastNameInput from "@/components/LastNameInput";
import { Separator } from "@/components/ui/separator";
import BirthYear from "@/components/BornYear";
import Mail from "@/components/Mail";
import LandingPageHeader from "@/components/LandingPageHeader";
import PhoneNumber from "@/components/PhoneNumber";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-items-start  p-24">
      <LandingPageHeader />
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>Please fill out this signup form</CardDescription>
        </CardHeader>
        <CardContent>
          <FirstNameInput />
          <LastNameInput />
          <Separator className="mt-2 mb-2" />
          <BirthYear />
          <Separator className="mt-2 mb-2" />
          <Mail />
          <PhoneNumber />
        </CardContent>
      </Card>
    </main>
  );
}
