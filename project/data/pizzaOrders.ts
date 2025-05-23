export type PizzaOrderStatus = 'pending' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';

export interface PizzaOrder {
  id: string;
  customerName: string;
  pizzaType: string;
  quantity: number;
  orderDate: string;
  status: PizzaOrderStatus;
}

export const pizzaOrders: PizzaOrder[] = [
  {
    id: 'PZA001',
    customerName: 'John Doe',
    pizzaType: 'Margherita',
    quantity: 2,
    orderDate: '2025-04-10 14:30',
    status: 'delivered',
  },
  {
    id: 'PZA002',
    customerName: 'Jane Smith',
    pizzaType: 'Pepperoni',
    quantity: 1,
    orderDate: '2025-04-10 15:45',
    status: 'preparing',
  },
  {
    id: 'PZA003',
    customerName: 'Robert Johnson',
    pizzaType: 'Veggie Supreme',
    quantity: 3,
    orderDate: '2025-04-10 16:20',
    status: 'pending',
  },
  {
    id: 'PZA004',
    customerName: 'Emily Davis',
    pizzaType: 'Hawaiian',
    quantity: 1,
    orderDate: '2025-04-10 17:15',
    status: 'out-for-delivery',
  },
  {
    id: 'PZA005',
    customerName: 'Michael Brown',
    pizzaType: 'BBQ Chicken',
    quantity: 2,
    orderDate: '2025-04-10 18:00',
    status: 'cancelled',
  },
  {
    id: 'PZA006',
    customerName: 'Sarah Wilson',
    pizzaType: 'Meat Lovers',
    quantity: 1,
    orderDate: '2025-04-11 12:30',
    status: 'pending',
  },
  {
    id: 'PZA007',
    customerName: 'David Martinez',
    pizzaType: 'Buffalo Chicken',
    quantity: 2,
    orderDate: '2025-04-11 13:45',
    status: 'preparing',
  },
  {
    id: 'PZA008',
    customerName: 'Lisa Anderson',
    pizzaType: 'Mushroom & Truffle',
    quantity: 1,
    orderDate: '2025-04-11 14:20',
    status: 'delivered',
  },
  {
    id: 'PZA009',
    customerName: 'Kevin Thompson',
    pizzaType: 'Four Cheese',
    quantity: 3,
    orderDate: '2025-04-11 16:10',
    status: 'out-for-delivery',
  },
  {
    id: 'PZA010',
    customerName: 'Amanda Garcia',
    pizzaType: 'Spinach & Feta',
    quantity: 1,
    orderDate: '2025-04-11 17:30',
    status: 'delivered',
  },
];