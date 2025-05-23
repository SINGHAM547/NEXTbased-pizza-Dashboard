import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PizzaOrdersTable from "@/components/pizza-orders-table";
import { pizzaOrders } from "@/data/pizzaOrders";

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pizza Orders</h1>
        <p className="text-muted-foreground">
          Manage and view all your pizza orders.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
          <CardDescription>
            A list of all pizza orders with their current status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PizzaOrdersTable orders={pizzaOrders} />
        </CardContent>
      </Card>
    </div>
  );
}