"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para enviar o formulário
    console.log("Formulário enviado:", formData)
    alert("Mensagem enviada com sucesso!")
    setFormData({
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    })
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start mt-8">
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="nome" className="text-sm font-medium">
                Nome
              </label>
              <Input
                id="nome"
                name="nome"
                placeholder="Seu nome"
                required
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                placeholder="seu.email@exemplo.com"
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="assunto" className="text-sm font-medium">
                Assunto
              </label>
              <Input
                id="assunto"
                name="assunto"
                placeholder="Assunto da mensagem"
                required
                value={formData.assunto}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="mensagem" className="text-sm font-medium">
                Mensagem
              </label>
              <Textarea
                id="mensagem"
                name="mensagem"
                placeholder="Sua mensagem"
                required
                rows={5}
                value={formData.mensagem}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Informações de Contato</h3>
          <p className="text-muted-foreground">
            Estou disponível para comissões, exposições e colaborações artísticas.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 mt-0.5 text-primary" />
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-sm text-muted-foreground">contato@meuportfolio.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 mt-0.5 text-primary" />
            <div>
              <h4 className="font-medium">Telefone</h4>
              <p className="text-sm text-muted-foreground">(00) 12345-6789</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 mt-0.5 text-primary" />
            <div>
              <h4 className="font-medium">Estúdio</h4>
              <p className="text-sm text-muted-foreground">Rua das Artes, 123 - Bairro Criativo</p>
              <p className="text-sm text-muted-foreground">São Paulo, SP - Brasil</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Segunda - Sexta</span>
              <span>9:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span>Sábado</span>
              <span>10:00 - 15:00</span>
            </div>
            <div className="flex justify-between">
              <span>Domingo</span>
              <span>Fechado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
