import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Brush, PenTool, Camera } from "lucide-react"

export function SobreMim() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Mim</h2>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Olá! Sou um artista apaixonado por explorar diferentes formas de expressão visual. Minha jornada artística
          começou há mais de 10 anos, e desde então tenho me dedicado a aprimorar minhas habilidades e desenvolver um
          estilo único.
        </p>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Meu trabalho é inspirado pela natureza, arquitetura urbana e emoções humanas. Busco transmitir sentimentos e
          provocar reflexões através das minhas obras, utilizando diversas técnicas e materiais.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <Palette className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-medium">Pintura</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <Brush className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-medium">Ilustração</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <PenTool className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-medium">Design</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <Camera className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-medium">Fotografia</h3>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[500px] overflow-hidden rounded-xl">
        <Image
          src="/placeholder.svg?height=800&width=600"
          width={600}
          height={800}
          alt="Foto do artista"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
