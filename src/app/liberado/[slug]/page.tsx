import { notFound } from "next/navigation"

import { UnlockedAlbumsScreen } from "@/components/unlocked-albums-screen"
import { getPdfDocuments } from "@/lib/pdf-documents"

const unlockedSlug = "copa-2026"

type LiberadoPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return [{ slug: unlockedSlug }]
}

export default async function LiberadoPage({ params }: LiberadoPageProps) {
  const { slug } = await params

  if (slug !== unlockedSlug) {
    notFound()
  }

  return <UnlockedAlbumsScreen documents={getPdfDocuments()} />
}
