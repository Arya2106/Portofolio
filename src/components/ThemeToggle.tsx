"use client";

import { Moon, Sun } from "lucide-react";

// Tema awal sudah dipasang oleh skrip di layout.tsx sebelum halaman tampil.
// Ikon dipilih lewat CSS (dark:), jadi tidak ada hydration mismatch.
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage bisa diblokir (mode privat); tema tetap berganti untuk sesi ini.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Ganti mode terang/gelap"
      title="Ganti mode terang/gelap"
      className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-signal hover:text-signal"
    >
      <Sun className="hidden h-3.5 w-3.5 dark:block" strokeWidth={1.75} aria-hidden="true" />
      <Moon className="h-3.5 w-3.5 dark:hidden" strokeWidth={1.75} aria-hidden="true" />
    </button>
  );
}
