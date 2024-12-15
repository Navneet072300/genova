import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={"/logo.webp"} />
    </Avatar>
  );
};

export default BotAvatar;
