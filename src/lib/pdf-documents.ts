export type StickerDocument = {
  name: string
  href: string
  tag: string
  accent: string
  previewHref: string
}

const driveFolderUrl =
  "https://drive.google.com/drive/folders/1b03aqoqbTF1JBpqCdOVMVTnMB-F8pIj8?usp=share_link"

export function getPdfDocuments(): StickerDocument[] {
  return [
    {
      name: "Todas as figurinhas em PDF",
      href: driveFolderUrl,
      tag: "Todas as equipes",
      accent: "bg-[#e60000]",
      previewHref: "/previews/TODAS%20LAS%20FIGURITAS%20EN%20PDF.pdf.png",
    },
    {
      name: "Álbum PDF 2026",
      href: driveFolderUrl,
      tag: "Extras",
      accent: "bg-[#244cff]",
      previewHref: "/previews/album-pdf-2026.png",
    },
    {
      name: "ALEMANHA",
      href: driveFolderUrl,
      tag: "ALEMANHA",
      accent: "bg-[#00d084]",
      previewHref: "/previews/ALEMANHA.pdf.png",
    },
    {
      name: "ARGENTINA",
      href: driveFolderUrl,
      tag: "ARGENTINA",
      accent: "bg-[#ff6a00]",
      previewHref: "/previews/ARGENTINA.pdf.png",
    },
    {
      name: "BRASIL",
      href: driveFolderUrl,
      tag: "BRASIL",
      accent: "bg-[#e60000]",
      previewHref: "/previews/BRASIL.pdf.png",
    },
    {
      name: "Coca-Cola",
      href: driveFolderUrl,
      tag: "Coca-Cola",
      accent: "bg-[#244cff]",
      previewHref: "/previews/COCA%20COLA.pdf.png",
    },
    {
      name: "Colômbia",
      href: driveFolderUrl,
      tag: "COLÔMBIA",
      accent: "bg-[#00d084]",
      previewHref: "/previews/COLOMBIA.pdf.png",
    },
    {
      name: "Controle de figurinhas 2026",
      href: driveFolderUrl,
      tag: "Extras",
      accent: "bg-[#ff6a00]",
      previewHref: "/previews/Controle%20de%20Figurinhas_26.pdf.png",
    },
    {
      name: "Croácia",
      href: driveFolderUrl,
      tag: "CROÁCIA",
      accent: "bg-[#e60000]",
      previewHref: "/previews/CROACIA.pdf.png",
    },
    {
      name: "Douradas",
      href: driveFolderUrl,
      tag: "Extras",
      accent: "bg-[#244cff]",
      previewHref: "/previews/Douradas.pdf.png",
    },
    {
      name: "ENVELOPES",
      href: driveFolderUrl,
      tag: "Extras",
      accent: "bg-[#00d084]",
      previewHref: "/previews/ENVELOPES.pdf.png",
    },
    {
      name: "EQUADOR",
      href: driveFolderUrl,
      tag: "EQUADOR",
      accent: "bg-[#ff6a00]",
      previewHref: "/previews/EQUADOR.pdf.png",
    },
    {
      name: "ESPANHA",
      href: driveFolderUrl,
      tag: "ESPANHA",
      accent: "bg-[#e60000]",
      previewHref: "/previews/ESPANHA.pdf.png",
    },
    {
      name: "Figurinhas extras douradas",
      href: driveFolderUrl,
      tag: "Extras",
      accent: "bg-[#244cff]",
      previewHref: "/previews/Figurinhas%20Extras%20Douradas%20(1).pdf.png",
    },
    {
      name: "Figurinhas extras - Parte 1",
      href: driveFolderUrl,
      tag: "Extras",
      accent: "bg-[#00d084]",
      previewHref: "/previews/FIGURINHAS%20EXTRAS%20PARTE%201.pdf.png",
    },
    {
      name: "FRANÇA",
      href: driveFolderUrl,
      tag: "FRANÇA",
      accent: "bg-[#ff6a00]",
      previewHref: "/previews/franca.png",
    },
    {
      name: "HOLANDA",
      href: driveFolderUrl,
      tag: "HOLANDA",
      accent: "bg-[#e60000]",
      previewHref: "/previews/HOLANDA.pdf.png",
    },
    {
      name: "Hologramas",
      href: driveFolderUrl,
      tag: "Extras",
      accent: "bg-[#244cff]",
      previewHref: "/previews/Hologramas%20(1).pdf.png",
    },
    {
      name: "INGLATERRA",
      href: driveFolderUrl,
      tag: "INGLATERRA",
      accent: "bg-[#00d084]",
      previewHref: "/previews/INGLATERRA.pdf.png",
    },
    {
      name: "MARROCOS",
      href: driveFolderUrl,
      tag: "MARROCOS",
      accent: "bg-[#ff6a00]",
      previewHref: "/previews/MARROCOS.pdf.png",
    },
    {
      name: "México",
      href: driveFolderUrl,
      tag: "MÉXICO",
      accent: "bg-[#e60000]",
      previewHref: "/previews/MEXICO.pdf.png",
    },
    {
      name: "NEYMAR",
      href: driveFolderUrl,
      tag: "NEYMAR",
      accent: "bg-[#244cff]",
      previewHref: "/previews/NEYMAR.pdf.png",
    },
    {
      name: "NORUEGA",
      href: driveFolderUrl,
      tag: "NORUEGA",
      accent: "bg-[#00d084]",
      previewHref: "/previews/NORUEGA.pdf.png",
    },
    {
      name: "PORTUGAL",
      href: driveFolderUrl,
      tag: "PORTUGAL",
      accent: "bg-[#ff6a00]",
      previewHref: "/previews/PORTUGAL.pdf.png",
    },
    {
      name: "URUGUAI",
      href: driveFolderUrl,
      tag: "URUGUAI",
      accent: "bg-[#e60000]",
      previewHref: "/previews/URUGUAI.pdf.png",
    },
  ]
}
