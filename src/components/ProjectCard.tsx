import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  desc,
  image,
  tag,
  index,
}: Readonly<{
  title: string;
  desc: string;
  image: string;
  tag?: string;
  index?: number;
}>) {
  return (
 <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-neutral-400 dark:hover:border-neutral-600 w-full cursor-pointer">
      
      {/* Image */}
      <div className="relative overflow-hidden h-52 bg-neutral-950">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
        {tag && (
          <span className="absolute top-3 left-3 text-[10px] tracking-widest  uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        {index !== undefined && (
          <p className="text-[11px]  tracking-widest text-neutral-400 dark:text-neutral-500 mb-1.5">
            {String(index).padStart(2, "0")} — 2024
          </p>
        )}
        <h2 className="font-serif text-2xl font-normal text-neutral-900 dark:text-neutral-100 leading-snug mb-2">
          {title}
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
          {desc}
        </p>
      </div>
    </div>
  );
}