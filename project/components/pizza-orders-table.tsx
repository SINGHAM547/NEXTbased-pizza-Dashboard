"use client";

import { PizzaOrder, PizzaOrderStatus } from "@/data/pizzaOrders";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, ArrowUpDown } from "lucide-react";

type SortField = 'id' | 'orderDate';
type SortOrder = 'asc' | 'desc';

interface PizzaOrdersTableProps {
  orders: PizzaOrder[];
}

export default function PizzaOrdersTable({ orders }: PizzaOrdersTableProps) {
  const [filteredOrders, setFilteredOrders] = useState<PizzaOrder[]>(orders);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortField, setSortField] = useState<SortField>('orderDate');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  useEffect(() => {
    // Filter orders by status and search query
    let filtered = [...orders];
    
    if (statusFilter !== "all") {
      filtered = filtered.filter(order => order.status === statusFilter);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        order => 
          order.id.toLowerCase().includes(query) ||
          order.customerName.toLowerCase().includes(query) ||
          order.pizzaType.toLowerCase().includes(query)
      );
    }
    
    // Sort orders
    filtered.sort((a, b) => {
      if (sortField === 'id') {
        return sortOrder === 'asc' 
          ? a.id.localeCompare(b.id)
          : b.id.localeCompare(a.id);
      } else {
        // Sort by date
        return sortOrder === 'asc'
          ? new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
          : new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime();
      }
    });
    
    setFilteredOrders(filtered);
  }, [orders, statusFilter, searchQuery, sortField, sortOrder]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Toggle sort order if clicking on the same field
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new sort field and default to ascending
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search orders..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select
          value={statusFilter}
          onValueChange={setStatusFilter}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="preparing">Preparing</SelectItem>
            <SelectItem value="out-for-delivery">Out for Delivery</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button 
                  variant="ghost" 
                  className="p-0 font-medium hover:bg-transparent hover:underline"
                  onClick={() => handleSort('id')}
                >
                  Order ID
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead className="hidden md:table-cell">Pizza Type</TableHead>
              <TableHead className="hidden sm:table-cell">Quantity</TableHead>
              <TableHead>
                <Button 
                  variant="ghost" 
                  className="p-0 font-medium hover:bg-transparent hover:underline"
                  onClick={() => handleSort('orderDate')}
                >
                  Order Date
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell className="hidden md:table-cell">{order.pizzaType}</TableCell>
                  <TableCell className="hidden sm:table-cell">{order.quantity}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>
                    <StatusBadge status={order.status} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No orders found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: PizzaOrderStatus }) {
  const statusStyles: Record<PizzaOrderStatus, { variant: "default" | "outline" | "secondary" | "destructive" | "success"; label: string }> = {
    "pending": { variant: "secondary", label: "Pending" },
    "preparing": { variant: "outline", label: "Preparing" },
    "out-for-delivery": { variant: "default", label: "Out for Delivery" },
    "delivered": { variant: "success", label: "Delivered" },
    "cancelled": { variant: "destructive", label: "Cancelled" },
  };

  const { variant, label } = statusStyles[status];

  return (
    <Badge variant={variant as any} className={variant === "success" ? "bg-green-500 hover:bg-green-600" : ""}>
      {label}
    </Badge>
  );
}