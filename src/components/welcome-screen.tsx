"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ArrowRight, Sparkles, Trophy } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const logoUrl =
  "https://upload.wikimedia.org/wikipedia/pt/d/d7/Logo_copa_2026.png"

export function WelcomeScreen() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        y: 18,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.08,
      })

      gsap.to("[data-float]", {
        y: -8,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <main
      ref={rootRef}
      className="min-h-screen bg-[#fbfbf7] px-5 py-6 text-[#171717] sm:px-8 lg:px-12"
    >
      <section className="mx-auto grid min-h-[calc(100vh-3rem)] w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
        <div className="flex max-w-3xl flex-col gap-8">
          <div data-reveal className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-white shadow-[0_10px_30px_rgba(23,23,23,0.08)] ring-1 ring-black/5">
              <Trophy className="text-[#b98016]" data-icon="inline-start" />
            </div>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#e60000]">
                Copa 2026
              </p>
              <p className="text-sm font-medium text-zinc-500">
                Materiais digitais
              </p>
            </div>
          </div>

          <Badge
            data-reveal
            className="w-fit rounded-full border-[#00d084]/30 bg-white px-4 py-2 text-[#0a7d55] shadow-sm"
            variant="outline"
          >
            <Sparkles data-icon="inline-start" />
            Biblioteca limpa e organizada
          </Badge>

          <div className="flex flex-col gap-5">
            <h1
              data-reveal
              className="max-w-2xl text-5xl font-black leading-[0.98] tracking-normal text-zinc-950 sm:text-6xl xl:text-7xl"
            >
              Bem-vindo ao álbum da Copa.
            </h1>
            <p
              data-reveal
              className="max-w-2xl text-lg font-medium leading-8 text-zinc-600 sm:text-xl"
            >
              Acesse todos os materiais da Copa em uma área separada, com
              prévias dos documentos e liberação protegida por pagamento.
            </p>
          </div>

          <div data-reveal className="flex">
            <Button
              nativeButton={false}
              render={
                <Link href="/albuns">
                  Acessar todos os materiais
                  <ArrowRight data-icon="inline-end" />
                </Link>
              }
              size="lg"
              className="h-12 rounded-2xl bg-[#171717] px-5 text-base text-white shadow-[0_14px_34px_rgba(23,23,23,0.16)] transition-transform hover:-translate-y-1 hover:bg-[#171717]"
            />
          </div>
        </div>

        <div data-reveal className="flex justify-center lg:justify-end">
          <div
            data-float
            className="relative grid aspect-[0.78] w-full max-w-[390px] place-items-center rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_28px_80px_rgba(23,23,23,0.12)]"
          >
            <div className="absolute left-5 top-5 flex gap-2">
              {["#e60000", "#244cff", "#00d084", "#ff6a00"].map((color) => (
                <span
                  key={color}
                  className="size-4 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <Image
              src={logoUrl}
              alt="Logo da Copa do Mundo FIFA 2026"
              width={323}
              height={499}
              priority
              className="h-auto w-[58%] drop-shadow-[0_18px_30px_rgba(23,23,23,0.2)]"
            />
            <div className="absolute inset-x-8 bottom-8 rounded-2xl bg-[#171717] p-4 text-white">
              <p className="text-sm font-extrabold">Materiais Copa 2026</p>
              <p className="text-xs font-medium text-white/70">
                uma entrada simples para a coleção
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
