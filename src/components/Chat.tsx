"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { Send } from "lucide-react";
import MessageFormatter from "./MessageFormatter";
import { ModeToggle } from "./Theme";
import { ScrollArea } from "./ui/scroll-area";

export interface ChatProps {}

export function Chat(props: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>Chat IA</CardTitle>
            <CardDescription>
              Converse with AI-powered assistants.
            </CardDescription>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="h-[450px] w-full pr-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="flex gap-3 text-slate-600 text-sm mb-4"
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>US</AvatarFallback>
                    <AvatarImage src="https://github.com/Adao-Angelo.png"></AvatarImage>
                  </Avatar>
                )}
                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>AG</AvatarFallback>
                    <AvatarImage src="https://github.com/Antonio-Gabriel.png"></AvatarImage>
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700 dark:text-slate-200">
                    {message.role === "user" ? "Usuário" : "AG"}
                  </span>

                  {message.role === "user" ? (
                    message.content
                  ) : (
                    <MessageFormatter text={message.content} />
                  )}
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
