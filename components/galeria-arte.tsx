"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

export function GaleriaArte() {
  const [imagemAberta, setImagemAberta] = useState<string | null>(null)

  const obras = [
    {
      id: 1,
      titulo: "Abstrato em Azul",
      descricao: "Acrílica sobre tela, 2023",
      imagem: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      titulo: "Paisagem Urbana",
      descricao: "Óleo sobre tela, 2022",
      imagem: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      titulo: "Retrato Contemporâneo",
      descricao: "Técnica mista, 2023",
      imagem: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      titulo: "Natureza Viva",
      descricao: "Aquarela, 2021",
      imagem: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      titulo: "Expressão Livre",
      descricao: "Acrílica sobre tela, 2022",
      imagem: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      titulo: "Composição Geométrica",
      descricao: "Digital, 2023",
      imagem: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {obras.map((obra) => (
          <Card
            key={obra.id}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setImagemAberta(obra.imagem)}
          >
            <div className="aspect-square relative">
              <Image src={obra.imagem || "/placeholder.svg"} alt={obra.titulo} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">{obra.titulo}</h3>
              <p className="text-sm text-muted-foreground">{obra.descricao}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!imagemAberta} onOpenChange={() => setImagemAberta(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {imagemAberta && (
            <div className="relative w-full aspect-video">
              <Image src={imagemAberta || "/placeholder.svg"} alt="Obra ampliada" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
