"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ArrowLeft, Lock, X } from "lucide-react"

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

type StickerDocument = {
  name: string
  href: string
  tag: string
  accent: string
}

type AlbumsScreenProps = {
  documents: StickerDocument[]
}

export function AlbumsScreen({ documents }: AlbumsScreenProps) {
  const rootRef = useRef<HTMLElement>(null)
  const [lockedDocument, setLockedDocument] = useState<StickerDocument | null>(
    null
  )

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
          className="flex flex-col justify-between gap-5 border-b border-black/10 pb-8 lg:flex-row lg:items-end"
        >
          <div className="flex max-w-3xl flex-col gap-4">
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
            <Badge className="w-fit rounded-full bg-[#e60000] px-4 py-2 text-white">
              Biblioteca da Copa
            </Badge>
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-black tracking-normal text-zinc-950 sm:text-5xl">
                Álbuns e figurinhas
              </h1>
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
                  Material bloqueado. Liberação disponível após pagamento.
                </CardDescription>
                <CardAction>
                  <Lock className="text-zinc-400" />
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
                  onClick={() => setLockedDocument(document)}
                  className="h-10 flex-1 rounded-xl bg-[#171717] text-white hover:bg-[#171717]/90"
                >
                  <Lock data-icon="inline-start" />
                  Liberar material
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>
      </div>

      {lockedDocument ? (
        <AvisoPagamento
          document={lockedDocument}
          onClose={() => setLockedDocument(null)}
        />
      ) : null}
    </main>
  )
}

function AvisoPagamento({
  document,
  onClose,
}: {
  document: StickerDocument
  onClose: () => void
}) {
  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-labelledby="payment-modal-title"
      className="fixed inset-0 z-50 grid place-items-center bg-black/45 px-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-[#171717] text-white">
            <Lock data-icon="inline-start" />
          </div>
          <Button
            size="icon"
            variant="ghost"
            onClick={onClose}
            aria-label="Fechar aviso"
            className="rounded-xl"
          >
            <X />
          </Button>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <Badge className="w-fit rounded-full bg-[#e60000] text-white">
            Pagamento necessário
          </Badge>
          <h2
            id="payment-modal-title"
            className="text-2xl font-black text-zinc-950"
          >
            Material liberado apenas após pagamento
          </h2>
          <p className="text-sm font-medium leading-6 text-zinc-600">
            O arquivo <span className="font-extrabold">{document.name}</span>{" "}
            está protegido. Após a confirmação do pagamento, o acesso para
            acessar o material será liberado.
          </p>
        </div>
      </div>
    </div>
  )
}
