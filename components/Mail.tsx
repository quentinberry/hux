"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { domainJson } from "@/lib/mail";
import { Label } from "./ui/label";

function Mail() {
  return (
    <>
      <Label htmlFor="email">Email</Label>

      <div className="flex space-x-2">
        <Input className="" />
        <p className="flex items-center">@</p>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {domainJson.realBaseDomains.map((domain: string) => (
                <SelectItem value={domain} key={domain}>
                  {domain}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="flex items-center">.</p>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Domain" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {domainJson.emailSuffixes.map((suffix: string) => (
                <SelectItem value={suffix} key={suffix}>
                  {suffix}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

export default Mail;
