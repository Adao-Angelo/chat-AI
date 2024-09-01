"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export interface ChatProps {}

export function Chat(props: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat IA</CardTitle>
        <CardDescription>Converse with AI-powered assistants.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="h-[400px] w-full pr-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="flex gap-3 text-slate-600 text-sm md-4"
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>AJ</AvatarFallback>
                    <AvatarImage src="https://github.com/Adao-Angelo.png"></AvatarImage>
                  </Avatar>
                )}
                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>AJ</AvatarFallback>
                    <AvatarImage src="https://github.com/Antonio-Gabriel.png"></AvatarImage>
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "user" ? "Usuário" : "AI"}
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          ></Input>
          <Button>
            <Send></Send>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}