import Sidebar from "@/components/common/ui/Sidebar";
import NotificationsList from "@/components/notifications/container/NotificationsList";
import React from "react";

async function fetchAllNotifications() {
  const res = await fetch("http://127.0.0.1:8080/notifications.json", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Notification");
  }

  return res.json();
}

const NotificationPage = async () => {
  const { notifications } = await fetchAllNotifications();
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <Sidebar />
      <div className="w-full lg:-mt-10 flex flex-col gap-4  -order-1 lg:order-1">
        <h4 className="text-xl font-medium">Notifications</h4>
        <NotificationsList notifications={notifications} />
      </div>
    </div>
  );
};

export default NotificationPage;
