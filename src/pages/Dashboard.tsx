"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  LayoutGrid,
  ClipboardList,
  ListOrdered,
  Users,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Search,
  Menu,
} from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const revenueData = [
  { name: "5k", sales: 20, profit: 30 },
  { name: "10k", sales: 30, profit: 70 },
  { name: "15k", sales: 35, profit: 40 },
  { name: "20k", sales: 30, profit: 30 },
  { name: "25k", sales: 55, profit: 40 },
  { name: "30k", sales: 50, profit: 55 },
  { name: "35k", sales: 90, profit: 50 },
  { name: "40k", sales: 70, profit: 60 },
  { name: "45k", sales: 50, profit: 40 },
  { name: "50k", sales: 65, profit: 35 },
  { name: "55k", sales: 40, profit: 50 },
  { name: "60k", sales: 50, profit: 90 },
]

const salesAnalyticsData = [
  { year: "2015", sales: 25, profit: 0 },
  { year: "2016", sales: 70, profit: 55 },
  { year: "2017", sales: 45, profit: 35 },
  { year: "2018", sales: 50, profit: 25 },
  { year: "2019", sales: 90, profit: 100 },
]

function App() {
  const [activeNav, setActiveNav] = useState("Dashboard")

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-56 border-r flex flex-col">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-blue-500">YesMart</h1>
        </div>

        <nav className="flex-1 py-4">
          <div className="space-y-1 px-3">
            <Button
              variant={activeNav === "Dashboard" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveNav("Dashboard")}
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>

            <Button
              variant={activeNav === "Products" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveNav("Products")}
            >
              <LayoutGrid className="mr-2 h-4 w-4" />
              Products
            </Button>

            <Button
              variant={activeNav === "Product Stock" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveNav("Product Stock")}
            >
              <ClipboardList className="mr-2 h-4 w-4" />
              Product Stock
            </Button>

            <Button
              variant={activeNav === "Order Lists" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveNav("Order Lists")}
            >
              <ListOrdered className="mr-2 h-4 w-4" />
              Order Lists
            </Button>

            <Button
              variant={activeNav === "Workers" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveNav("Workers")}
            >
              <Users className="mr-2 h-4 w-4" />
              Workers
            </Button>
          </div>
        </nav>

        <div className="p-4 border-t mt-auto">
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="border-b p-4 flex items-center justify-between">
          <button className="lg:hidden">
            <Menu className="h-6 w-6" />
          </button>

          <div className="relative w-full max-w-md mx-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search" className="w-full bg-muted/30 pl-8" />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex flex-col items-end">
              <span className="font-medium">Moni Roy</span>
              <span className="text-xs text-muted-foreground">Admin</span>
            </div>
            <div className="h-10 w-10 rounded-full overflow-hidden border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wireframe%20-%201-ihSscXi4miqLvXn1QBhWkvAtusNFMg.png"
                alt="User avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Revenue Chart */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Revenue</h2>
              <Button variant="outline" className="gap-1">
                October
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF9F7F" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#FF9F7F" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#E4CBFF" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#E4CBFF" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="sales" stroke="#FF7F5C" fillOpacity={1} fill="url(#colorSales)" />
                  <Area type="monotone" dataKey="profit" stroke="#D4ADFC" fillOpacity={1} fill="url(#colorProfit)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="flex justify-center gap-8 mt-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#FF7F5C]"></div>
                <span>Sales</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#D4ADFC]"></div>
                <span>Profit</span>
              </div>
            </div>
          </div>.

          {/* Three Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Featured Product */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Product</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative w-full h-40 mb-4">
                  <Button variant="outline" size="icon" className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <div className="w-full h-full flex items-center justify-center">
                    <img src="https://placehold.co/120x120" alt="Beats Headphone" className="object-contain" />
                  </div>
                </div>
                <h3 className="font-medium text-center">Beats Headphone 2019</h3>
                <span className="text-blue-500">$89.00</span>
              </CardContent>
            </Card>

            {/* Customers */}
            <Card>
              <CardHeader>
                <CardTitle>Customers</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f0f0f0" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#4285F4"
                      strokeWidth="10"
                      strokeDasharray="251.2"
                      strokeDashoffset="50"
                      transform="rotate(-90 50 50)"
                    />
                    <circle cx="50" cy="10" r="5" fill="#4285F4" />
                    <circle cx="90" cy="50" r="5" fill="#4285F4" />
                    <circle cx="50" cy="90" r="5" fill="#4285F4" />
                    <circle cx="10" cy="50" r="5" fill="#4285F4" />
                  </svg>
                </div>
                <div className="grid grid-cols-2 gap-8 w-full">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">34,249</span>
                    <div className="flex items-center gap-1 text-sm">
                      <div className="h-2 w-2 rounded-full bg-[#4285F4]"></div>
                      <span>New Customers</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">1,420</span>
                    <div className="flex items-center gap-1 text-sm">
                      <div className="h-2 w-2 rounded-full bg-[#E8EAED]"></div>
                      <span>Repeated</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sales Analytics */}
            <Card>
              <CardHeader>
                <CardTitle>Sales Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={salesAnalyticsData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                      <XAxis dataKey="year" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
                      <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#4285F4"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="profit"
                        stroke="#34A853"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

