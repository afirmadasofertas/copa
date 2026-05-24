import fs from "node:fs"
import path from "node:path"

export type StickerDocument = {
  name: string
  href: string
  tag: string
  accent: string
  previewHref?: string
}

const accents = ["bg-[#e60000]", "bg-[#244cff]", "bg-[#00d084]", "bg-[#ff6a00]"]

const translatedNames: Record<string, string> = {
  "TODAS LAS FIGURITAS EN PDF": "Todas as figurinhas em PDF",
  "COCA COLA": "Coca-Cola",
  MEXICO: "México",
  COLOMBIA: "Colômbia",
  CROACIA: "Croácia",
  "Controle de Figurinhas 26": "Controle de figurinhas 2026",
  "Figurinhas Extras Douradas (1)": "Figurinhas extras douradas",
  "FIGURINHAS EXTRAS PARTE 1": "Figurinhas extras - Parte 1",
  "Hologramas (1)": "Hologramas",
}

const translatedTags: Record<string, string> = {
  "0 TODAS AS EQUIPES Qualidade Média": "Todas as equipes",
  "COCA-COLA": "Coca-Cola",
  MEXICO: "México",
  COLOMBIA: "Colômbia",
  CROACIA: "Croácia",
}

function normalizeTitle(title: string) {
  return translatedNames[title] ?? title
}

function normalizeTag(tag: string) {
  return translatedTags[tag] ?? tag
}

export function getPdfDocuments(): StickerDocument[] {
  const root = path.join(process.cwd(), "public", "mundial2026")
  const publicRoot = path.join(process.cwd(), "public")
  const previewsRoot = path.join(publicRoot, "previews")
  const previews = fs.existsSync(previewsRoot)
    ? fs.readdirSync(previewsRoot).map((file) => ({
        file,
        normalized: file.normalize("NFC"),
      }))
    : []
  const files: string[] = []

  function walk(directory: string) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name)

      if (entry.isDirectory()) {
        walk(fullPath)
        continue
      }

      if (entry.isFile() && entry.name.toLowerCase().endsWith(".pdf")) {
        files.push(fullPath)
      }
    }
  }

  walk(root)

  return files
    .sort((a, b) => a.localeCompare(b, "pt-BR"))
    .map((file, index) => {
      const relativePath = path.relative(publicRoot, file)
      const rawName = path.basename(file, ".pdf").replaceAll("_", " ")
      const parent = path.basename(path.dirname(file)).replace(" (Alta Resolução)", "")
      const preview = previews.find(
        (item) => item.normalized === `${path.basename(file)}.png`.normalize("NFC")
      )

      return {
        name: normalizeTitle(rawName),
        href: `/${relativePath.split(path.sep).map(encodeURIComponent).join("/")}`,
        tag: parent === "mundial2026" ? "Extras" : normalizeTag(parent),
        accent: accents[index % accents.length],
        previewHref: preview
          ? `/previews/${preview.file.split(path.sep).map(encodeURIComponent).join("/")}`
          : undefined,
      }
    })
}
