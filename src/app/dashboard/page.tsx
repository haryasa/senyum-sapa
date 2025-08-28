import React from "react";
import { stackServerApp } from "@/stack";

export default async function DashboardPage() {
  const displayName = (await stackServerApp.getUser())?.displayName;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">Welcome to your dashboard, {displayName}!</p>
      <a href={stackServerApp.urls.signOut}>Sign Out</a>
    </main>
  );
}
