"use client";

import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { ClientSideSuspense } from "@liveblocks/react";
import { useInboxNotifications } from "@liveblocks/react/suspense";
import { InboxNotification, InboxNotificationList } from "@liveblocks/react-ui";
import { BellIcon } from "lucide-react";

export const Inbox = () => {
  return (
    <ClientSideSuspense
      fallback={
        <>
          <Button variant="ghost" size="icon" className="relative hover:bg-transparent focus:bg-transparent pl-2 pr-2" disabled>
            <BellIcon className="size-5 " />
          </Button>
        </>
      }
    >
      <InboxMenu />
    </ClientSideSuspense>
  );
};

const InboxMenu = () => {
  const { inboxNotifications } = useInboxNotifications();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="hover:bg-transparent focus:bg-transparent pl-2 pr-2 relative">
            <BellIcon className="size-5 " />
            {inboxNotifications.length > 0 && (
              <span className="absolute -top-1 -right-1 size-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                {inboxNotifications.length}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-auto">
          {inboxNotifications.length > 0 ? (
            <InboxNotificationList>
              {inboxNotifications.map((inboxNotification) => (
                <InboxNotification
                  key={inboxNotification.id}
                  inboxNotification={inboxNotification}
                />
              ))}
            </InboxNotificationList>
          ) : (
            <div className="p-2 w-[400px] text-center text-sm text-muted-foreground">
              No notifications
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
