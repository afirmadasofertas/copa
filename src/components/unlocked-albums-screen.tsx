"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ArrowLeft, Download, Eye, FileCheck } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { StickerDocument } from "@/lib/pdf-documents"

type UnlockedAlbumsScreenProps = {
  documents: StickerDocument[]
}

export function UnlockedAlbumsScreen({ documents }: UnlockedAlbumsScreenProps) {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        y: 18,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.04,
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <main
      ref={rootRef}
      className="min-h-screen bg-[#fbfbf7] px-5 py-6 text-[#171717] sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <header
          data-reveal
          className="flex flex-col gap-5 border-b border-black/10 pb-8"
        >
          <Button
            nativeButton={false}
            render={
              <Link href="/">
                <ArrowLeft data-icon="inline-start" />
                Voltar
              </Link>
            }
            variant="outline"
            className="h-10 w-fit rounded-xl border-black/10 bg-white shadow-sm"
          />

          <div className="flex max-w-3xl flex-col gap-4">
            <Badge className="w-fit rounded-full bg-[#00a86b] px-4 py-2 text-white">
              Acesso liberado
            </Badge>
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-black tracking-normal text-zinc-950 sm:text-5xl">
                Todos os materiais liberados
              </h1>
              <p className="max-w-2xl text-base font-medium leading-7 text-zinc-600">
                Visualize ou baixe todos os arquivos da coleção.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-5 lg:grid-cols-3">
          {documents.map((document) => (
            <Card
              data-reveal
              key={document.href}
              className="rounded-2xl border-0 bg-white shadow-[0_18px_50px_rgba(23,23,23,0.07)] ring-black/5 transition-transform duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-3 flex items-center gap-2">
                  <span className={`h-3 w-10 rounded-full ${document.accent}`} />
                  <Badge variant="outline" className="rounded-full bg-white">
                    {document.tag}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-black text-zinc-950">
                  {document.name}
                </CardTitle>
                <CardDescription className="font-medium leading-6">
                  Material disponível para acesso imediato.
                </CardDescription>
                <CardAction>
                  <FileCheck className="text-[#00a86b]" />
                </CardAction>
              </CardHeader>

              <CardContent>
                <div className="overflow-hidden rounded-xl border border-black/10 bg-zinc-50">
                  <iframe
                    title={`Prévia de ${document.name}`}
                    src={`${document.href}#toolbar=0&navpanes=0&view=FitH`}
                    className="h-[310px] w-full bg-white"
                  />
                </div>
              </CardContent>

              <CardFooter className="flex gap-2 border-black/5 bg-white">
                <Button
                  nativeButton={false}
                  render={
                    <a href={document.href} target="_blank" rel="noreferrer">
                      <Eye data-icon="inline-start" />
                      Abrir
                    </a>
                  }
                  variant="outline"
                  className="h-10 flex-1 rounded-xl bg-white"
                />
                <Button
                  nativeButton={false}
                  render={
                    <a href={document.href} download>
                      <Download data-icon="inline-start" />
                      Baixar
                    </a>
                  }
                  className="h-10 flex-1 rounded-xl bg-[#171717] text-white hover:bg-[#171717]/90"
                />
              </CardFooter>
            </Card>
          ))}
        </section>
      </div>
    </main>
  )
}
