import React from "react";
import MessageContainer from "@/components/messages/container/MessageContainer";

async function fetchAllChats() {
  const res = await fetch("http://127.0.0.1:8080/messages.json", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Messages");
  }

  return res.json();
}

const MessagePage = async () => {
  const { messages } = await fetchAllChats();
  return <MessageContainer chats={messages} />;
};

export default MessagePage;
