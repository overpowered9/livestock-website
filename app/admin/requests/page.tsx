"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, PackageOpen, Trash2, CheckCircle2, Circle, RefreshCcw } from "lucide-react"

interface RequestItem {
  _id: string
  type: "contact" | "inquiry"
  read: boolean
  createdAt: string
  source: "web"
  data: any
}

export default function AdminRequestsPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState<RequestItem[]>([])
  const [page, setPage] = useState(1)
  const [pageSize] = useState(25)
  const [total, setTotal] = useState(0)
  const [typeFilter, setTypeFilter] = useState<"all" | "contact" | "inquiry">("all")
  const [readFilter, setReadFilter] = useState<"all" | "unread" | "read">("all")

  const load = async () => {
    setLoading(true)
    try {
      const sp = new URLSearchParams()
      sp.set("page", String(page))
      sp.set("pageSize", String(pageSize))
      if (typeFilter !== "all") sp.set("type", typeFilter)
      if (readFilter !== "all") sp.set("read", readFilter === "read" ? "true" : "false")
      const res = await fetch(`/api/requests?${sp.toString()}`, { cache: "no-store" })
      if (res.status === 401) {
        router.replace("/admin/login?from=/admin/requests")
        return
      }
      const json = await res.json()
      if (json.success) {
        setItems(json.items as RequestItem[])
        setTotal(json.total as number)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, typeFilter, readFilter])

  const markRead = async (id: string, read: boolean) => {
    const res = await fetch(`/api/requests/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read }),
    })
    const json = await res.json()
    if (json.success) {
      setItems((prev) => prev.map((it) => (it._id === id ? { ...it, read } : it)))
      toast({ title: read ? "Marked as read" : "Marked as unread" })
    } else {
      toast({ title: "Action failed", variant: "destructive" })
    }
  }

  const remove = async (id: string) => {
    const res = await fetch(`/api/requests/${id}`, { method: "DELETE" })
    const json = await res.json()
    if (json.success) {
      setItems((prev) => prev.filter((it) => it._id !== id))
      setTotal((t) => Math.max(0, t - 1))
      toast({ title: "Deleted" })
    } else {
      toast({ title: "Delete failed", variant: "destructive" })
    }
  }

  const unreadCount = useMemo(() => items.filter((i) => !i.read).length, [items])
  const readCount = useMemo(() => items.filter((i) => i.read).length, [items])

  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">Requests</h1>
            <p className="text-muted-foreground mt-1 sm:mt-2">View and manage form submissions</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => load()}>
              <RefreshCcw className="w-4 h-4 mr-2" /> Refresh
            </Button>
            <Button variant="ghost" onClick={() => router.push("/admin")}>Back to Admin</Button>
          </div>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6 flex flex-col md:flex-row gap-4 md:items-end">
            <div className="flex-1">
              <Label>Type</Label>
              <Select value={typeFilter} onValueChange={(v: any) => { setPage(1); setTypeFilter(v) }}>
                <SelectTrigger className="w-full md:w-64"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="contact">Contact</SelectItem>
                  <SelectItem value="inquiry">Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label>Status</Label>
              <Select value={readFilter} onValueChange={(v: any) => { setPage(1); setReadFilter(v) }}>
                <SelectTrigger className="w-full md:w-64"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="unread">Unread</SelectItem>
                  <SelectItem value="read">Read</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground">Total: {total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-serif">Inbox</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="p-6 text-sm text-muted-foreground">Loading...</div>
            ) : items.length === 0 ? (
              <div className="p-6 text-sm text-muted-foreground">No requests.</div>
            ) : (
              <Tabs defaultValue="unread" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:w-auto">
                  <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
                  <TabsTrigger value="read">Read ({readCount})</TabsTrigger>
                </TabsList>
                <TabsContent value="unread" className="mt-4 space-y-4">
                  {items.filter((i) => !i.read).map((req) => (
                    <RequestRow key={req._id} req={req} onMark={markRead} onDelete={remove} />
                  ))}
                </TabsContent>
                <TabsContent value="read" className="mt-4 space-y-4">
                  {items.filter((i) => i.read).map((req) => (
                    <RequestRow key={req._id} req={req} onMark={markRead} onDelete={remove} />
                  ))}
                </TabsContent>
              </Tabs>
            )}
          </CardContent>
        </Card>

        {/* Simple pagination */}
        {total > pageSize && (
          <div className="flex justify-between items-center mt-6">
            <Button variant="outline" disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>Previous</Button>
            <div className="text-sm text-muted-foreground">Page {page}</div>
            <Button variant="outline" disabled={page * pageSize >= total} onClick={() => setPage((p) => p + 1)}>Next</Button>
          </div>
        )}
      </div>
    </div>
  )
}

function RequestRow({ req, onMark, onDelete }: { req: RequestItem; onMark: (id: string, read: boolean) => void; onDelete: (id: string) => void }) {
  const created = new Date(req.createdAt)
  const title = req.type === "contact" ? `${req.data.firstName} ${req.data.lastName} • ${req.data.subject}` : `${req.data.name} • ${req.data.productName}`
  const subtitle = req.type === "contact" ? `${req.data.email}${req.data.phone ? ` • ${req.data.phone}` : ""}` : `${req.data.email}${req.data.phone ? ` • ${req.data.phone}` : ""}`

  return (
    <Card className="hover:shadow-sm">
      <CardContent className="p-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center ${req.type === "contact" ? "bg-primary/10" : "bg-accent/10"}`}>
                {req.type === "contact" ? <Mail className="w-5 h-5 text-primary" /> : <PackageOpen className="w-5 h-5 text-accent-foreground" />}
              </div>
              <div className="min-w-0">
                <div className="font-medium truncate">{title}</div>
                <div className="text-xs text-muted-foreground truncate">{subtitle}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={req.read ? "secondary" : "default"} className="text-xs flex items-center gap-1">
                {req.read ? <CheckCircle2 className="w-3 h-3" /> : <Circle className="w-3 h-3" />} {req.read ? "Read" : "Unread"}
              </Badge>
              <div className="text-xs text-muted-foreground">{created.toLocaleString()}</div>
            </div>
          </div>

          {/* Body */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-sm text-foreground space-y-1">
              {req.type === "contact" ? (
                <>
                  <div><span className="text-muted-foreground">Inquiry Type:</span> {req.data.inquiryType}</div>
                  {req.data.company && <div><span className="text-muted-foreground">Company:</span> {req.data.company}</div>}
                  {req.data.location && <div><span className="text-muted-foreground">Location:</span> {req.data.location}</div>}
                </>
              ) : (
                <>
                  {req.data.productBreed && <div><span className="text-muted-foreground">Breed:</span> {req.data.productBreed}</div>}
                  {req.data.productPrice && <div><span className="text-muted-foreground">Price Shown:</span> {req.data.productPrice}</div>}
                  <div><span className="text-muted-foreground">Availability:</span> {req.data.productAvailability}</div>
                  {req.data.quantity && <div><span className="text-muted-foreground">Quantity:</span> {req.data.quantity}</div>}
                </>
              )}
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Message</Label>
              <Textarea readOnly value={req.data.message} className="mt-1 h-28 resize-none" />
            </div>
          </div>

          <div className="flex gap-2 justify-end">
            <Button variant="outline" size="sm" onClick={() => onMark(req._id, !req.read)}>
              {req.read ? "Mark Unread" : "Mark Read"}
            </Button>
            <Button variant="outline" size="sm" onClick={() => onDelete(req._id)}>
              <Trash2 className="w-4 h-4 mr-1" /> Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
