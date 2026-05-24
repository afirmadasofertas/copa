import { AlbumsScreen } from "@/components/albums-screen"
import { getPdfDocuments } from "@/lib/pdf-documents"

export default function AlbunsPage() {
  return <AlbumsScreen documents={getPdfDocuments()} />
}
