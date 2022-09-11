import { createTRPCClient } from "@trpc/client";
import { useState } from "react";
import { AppRouter } from "../server/router";
import superjson from "superjson";

function AdminComponent() {
  const [trpcClient] = useState(() => {
    createTRPCClient<AppRouter>({
      url: "http://localhost:3000/api/trpc",
      transformer: superjson,
    });
  });

  const resources: Resources<{}>

  return (
    <div>
      <h1>Admin</h1>
      <p>Only admins can see this page.</p>
    </div>
  );
}

export default AdminComponent;
