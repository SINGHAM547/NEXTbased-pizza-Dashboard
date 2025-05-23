"use client";

import { useSession } from "next-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PizzaIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  
  if (status === "loading") {
    return <DashboardSkeleton />;
  }

  const userName = session?.user?.name || "User";
  const firstName = userName.split(" ")[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hello, {firstName}!</h1>
        <p className="text-muted-foreground">
          Welcome to your pizza dashboard. Here you can manage your orders.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle>Pizza Orders</CardTitle>
            <CardDescription>Manage all your pizza orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-2 flex flex-col">
              <div className="flex items-center">
                <PizzaIcon className="mr-2 h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">View and manage orders</span>
              </div>
              <Button asChild className="mt-4" size="sm">
                <Link href="/dashboard/orders">
                  Go to Orders
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Your profile details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Name:</span>
                <span className="text-sm text-muted-foreground">{session?.user?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Email:</span>
                <span className="text-sm text-muted-foreground">{session?.user?.email}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-4 w-[350px] mt-2" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <Skeleton className="h-6 w-[140px]" />
            <Skeleton className="h-4 w-[180px] mt-1" />
          </CardHeader>
          <CardContent>
            <div className="mt-2 flex flex-col">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-9 w-[120px] mt-4" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[160px]" />
            <Skeleton className="h-4 w-[120px] mt-1" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <Skeleton className="h-5 w-[60px]" />
                <Skeleton className="h-5 w-[120px]" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-5 w-[60px]" />
                <Skeleton className="h-5 w-[180px]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}