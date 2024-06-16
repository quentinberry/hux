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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>Please fill out this customer form</CardDescription>
        </CardHeader>
        <CardContent>
          <FirstNameInput />
          <Separator className="mt-2 mb-2" />
          <BirthYear />
          <Separator className="mt-2 mb-2" />
          <LastNameInput />
        </CardContent>
      </Card>
    </main>
  );
}
