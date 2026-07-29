import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const perangkat = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/perangkat" }),
  schema: z.object({
    nama: z.string(),
    jabatan: z.string(),
    foto: z.string().default("https://placehold.co/400x500/eaeaea/999?text=Foto+Profil"),
    urutan: z.number().default(99),
  }),
});

const umkm = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/umkm" }),
  schema: z.object({
    namaUsaha: z.string(),
    pemilik: z.string(),
    deskripsi: z.string(),
    foto: z.string().default("https://placehold.co/600x400/eaeaea/999?text=Foto+Produk"),
    kontak: z.string().optional(),
  }),
});

const fasilitas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/fasilitas" }),
  schema: z.object({
    nama: z.string(),
    kategori: z.enum(["Sekolah", "Tempat Ibadah", "Kesehatan", "Fasilitas Umum", "Lainnya", "Rutin", "Tahunan", "Organisasi"]),
    keterangan: z.string().optional(),
    ikon: z.string().optional(),
    gmapsEmbed: z.string().optional(),
  }),
});

const kegiatan = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/kegiatan" }),
  schema: z.object({
    nama: z.string(),
    kategori: z.enum(["Rutin", "Tahunan", "Organisasi", "Sekolah", "Tempat Ibadah", "Kesehatan", "Fasilitas Umum", "Lainnya"]),
    deskripsi: z.string().optional(),
    foto: z.string().default("https://placehold.co/600x400/eaeaea/999?text=Foto+Kegiatan"),
  }),
});

const galeri = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/galeri" }),
  schema: z.object({
    judul: z.string(),
    kategori: z.string(),
    foto: z.string().default("https://placehold.co/800x600/eaeaea/999?text=Foto+Galeri"),
  }),
});

export const collections = {
  perangkat,
  umkm,
  fasilitas,
  kegiatan,
  galeri,
};
