"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import type { Product } from "@/lib/types"
import { useEffect, useMemo, useState } from "react"
import { Plus, Edit, Trash2, Eye, Save, X } from "lucide-react"

export default function AdminPage() {
  const [items, setItems] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isAddingProduct, setIsAddingProduct] = useState(false)
  const [formData, setFormData] = useState<Partial<Product>>({
    name: "",
    type: "goat",
    description: "",
    breed: "",
    origin: "",
    careInstructions: "",
    price: "",
    availability: "available",
    image: "",
  })

  const loadProducts = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/products", { cache: "no-store" })
      const json = await res.json()
      if (json.success) setItems(json.data as Product[])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const handleInputChange = (field: keyof Product, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.type || !formData.description || !formData.origin || !formData.availability) return

    const payload = { ...formData }
    const isEdit = !!selectedProduct
    const url = isEdit ? `/api/products/${selectedProduct!.id}` : "/api/products"
    const method = isEdit ? "PUT" : "POST"

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    const json = await res.json()
    if (json.success) {
      await loadProducts()
      setIsAddingProduct(false)
      setSelectedProduct(null)
      setFormData({
        name: "",
        type: "goat",
        description: "",
        breed: "",
        origin: "",
        careInstructions: "",
        price: "",
        availability: "available",
        image: "",
      })
    } else {
      console.error(json.message)
    }
  }

  const handleEdit = (product: Product) => {
    setSelectedProduct(product)
    setFormData(product)
    setIsAddingProduct(true)
  }

  const handleDelete = async (productId: string) => {
    const res = await fetch(`/api/products/${productId}`, { method: "DELETE" })
    const json = await res.json()
    if (json.success) {
      setItems((prev) => prev.filter((p) => p.id !== productId))
    } else {
      console.error(json.message)
    }
  }

  const goats = useMemo(() => items.filter((p) => p.type === "goat"), [items])
  const cows = useMemo(() => items.filter((p) => p.type === "cow"), [items])
  const vegetables = useMemo(() => items.filter((p) => p.type === "vegetable"), [items])
  const honey = useMemo(() => items.filter((p) => p.type === "honey"), [items])

  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground">Admin Panel</h1>
            <p className="text-muted-foreground mt-2">Manage livestock and agricultural products</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setIsAddingProduct(true)} className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add New Product
            </Button>
            <Button variant="outline" onClick={loadProducts}>Refresh</Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{goats.length}</div>
              <p className="text-sm text-muted-foreground">Goat Breeds</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{cows.length}</div>
              <p className="text-sm text-muted-foreground">Cow Breeds</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{vegetables.length}</div>
              <p className="text-sm text-muted-foreground">Vegetables</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{honey.length}</div>
              <p className="text-sm text-muted-foreground">Honey Products</p>
            </CardContent>
          </Card>
        </div>

        {/* Product Management */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-serif">Product Management</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="p-6 text-sm text-muted-foreground">Loading...</div>
            ) : (
              <Tabs defaultValue="goats" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="goats">Goats ({goats.length})</TabsTrigger>
                  <TabsTrigger value="cows">Cows ({cows.length})</TabsTrigger>
                  <TabsTrigger value="vegetables">Vegetables ({vegetables.length})</TabsTrigger>
                  <TabsTrigger value="honey">Honey ({honey.length})</TabsTrigger>
                </TabsList>

                {/* Goats Tab */}
                <TabsContent value="goats" className="mt-6">
                  <div className="space-y-4">
                    {goats.map((product) => (
                      <Card key={product.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="flex items-center justify-between p-6">
                          <div className="flex items-center gap-4">
                            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-16 h-16 rounded-lg object-cover" />
                            <div>
                              <h3 className="font-semibold text-foreground">{product.name}</h3>
                              <p className="text-sm text-muted-foreground">{product.breed} • {product.origin}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant={product.availability === "available" ? "default" : "secondary"} className="text-xs">
                                  {product.availability}
                                </Badge>
                                <span className="text-sm font-medium text-primary">{product.price || "Contact for price"}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>{product.name}</DialogTitle>
                                </DialogHeader>
                                <div className="grid md:grid-cols-2 gap-6">
                                  <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full aspect-square rounded-lg object-cover" />
                                  <div className="space-y-4">
                                    <div>
                                      <Label className="text-sm font-medium">Description</Label>
                                      <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium">Care Instructions</Label>
                                      <p className="text-sm text-muted-foreground mt-1">{product.careInstructions}</p>
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button variant="outline" size="sm" onClick={() => handleEdit(product)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleDelete(product.id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Cows Tab */}
                <TabsContent value="cows" className="mt-6">
                  <div className="space-y-4">
                    {cows.map((product) => (
                      <Card key={product.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="flex items-center justify-between p-6">
                          <div className="flex items-center gap-4">
                            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-16 h-16 rounded-lg object-cover" />
                            <div>
                              <h3 className="font-semibold text-foreground">{product.name}</h3>
                              <p className="text-sm text-muted-foreground">{product.breed} • {product.origin}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant={product.availability === "available" ? "default" : "secondary"} className="text-xs">
                                  {product.availability}
                                </Badge>
                                <span className="text-sm font-medium text-primary">{product.price || "Contact for price"}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" onClick={() => handleEdit(product)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleDelete(product.id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Vegetables Tab */}
                <TabsContent value="vegetables" className="mt-6">
                  <div className="space-y-4">
                    {vegetables.map((product) => (
                      <Card key={product.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="flex items-center justify-between p-6">
                          <div className="flex items-center gap-4">
                            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-16 h-16 rounded-lg object-cover" />
                            <div>
                              <h3 className="font-semibold text-foreground">{product.name}</h3>
                              <p className="text-sm text-muted-foreground">{product.origin}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant={product.availability === "available" ? "default" : "secondary"} className="text-xs">
                                  {product.availability}
                                </Badge>
                                <span className="text-sm font-medium text-primary">{product.price || "Contact for price"}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" onClick={() => handleEdit(product)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleDelete(product.id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Honey Tab */}
                <TabsContent value="honey" className="mt-6">
                  <div className="space-y-4">
                    {honey.map((product) => (
                      <Card key={product.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="flex items-center justify-between p-6">
                          <div className="flex items-center gap-4">
                            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-16 h-16 rounded-lg object-cover" />
                            <div>
                              <h3 className="font-semibold text-foreground">{product.name}</h3>
                              <p className="text-sm text-muted-foreground">{product.origin}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant={product.availability === "available" ? "default" : "secondary"} className="text-xs">
                                  {product.availability}
                                </Badge>
                                <span className="text-sm font-medium text-primary">{product.price || "Contact for price"}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" onClick={() => handleEdit(product)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleDelete(product.id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Add/Edit Product Modal */}
      {isAddingProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-serif">{selectedProduct ? "Edit Product" : "Add New Product"}</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsAddingProduct(false)
                  setSelectedProduct(null)
                  setFormData({
                    name: "",
                    type: "goat",
                    description: "",
                    breed: "",
                    origin: "",
                    careInstructions: "",
                    price: "",
                    availability: "available",
                    image: "",
                  })
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name *</Label>
                    <Input id="name" value={formData.name || ""} onChange={(e) => handleInputChange("name", e.target.value)} required placeholder="Enter product name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Product Type *</Label>
                    <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="goat">Goat</SelectItem>
                        <SelectItem value="cow">Cow</SelectItem>
                        <SelectItem value="vegetable">Vegetable</SelectItem>
                        <SelectItem value="honey">Honey</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea id="description" value={formData.description || ""} onChange={(e) => handleInputChange("description", e.target.value)} required placeholder="Enter product description" rows={3} />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="breed">Breed (for livestock)</Label>
                    <Input id="breed" value={formData.breed || ""} onChange={(e) => handleInputChange("breed", e.target.value)} placeholder="Enter breed name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="origin">Origin *</Label>
                    <Input id="origin" value={formData.origin || ""} onChange={(e) => handleInputChange("origin", e.target.value)} required placeholder="Enter origin location" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="careInstructions">Care Instructions</Label>
                  <Textarea id="careInstructions" value={formData.careInstructions || ""} onChange={(e) => handleInputChange("careInstructions", e.target.value)} placeholder="Enter care instructions" rows={3} />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <Input id="price" value={formData.price || ""} onChange={(e) => handleInputChange("price", e.target.value)} placeholder="e.g., PKR 45,000 - 65,000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability *</Label>
                    <Select value={formData.availability} onValueChange={(value) => handleInputChange("availability", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="available">Available</SelectItem>
                        <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                        <SelectItem value="seasonal">Seasonal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input id="image" value={formData.image || ""} onChange={(e) => handleInputChange("image", e.target.value)} placeholder="Enter image URL" />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    <Save className="w-4 h-4 mr-2" />
                    {selectedProduct ? "Update Product" : "Add Product"}
                  </Button>
                  <Button type="button" variant="outline" className="flex-1 bg-transparent" onClick={() => { setIsAddingProduct(false); setSelectedProduct(null) }}>Cancel</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
