'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  avatar: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  avatar,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      className="relative group rounded-2xl bg-[#05043A] bg-opacity-10  p-3 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <a href={link} target="_blank" className="block">
        <div className="relative aspect-projectCard w-full overflow-hidden rounded-xl ">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        <div className="mt-3 flex items-center gap-2">
          <div className="w-[30px] h-[30px] flex-shrink-0 relative">
            <Image src={avatar} alt={title} className="object-cover" fill />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-gray-900">{title}</h3>
            <p className="text-xs text-gray-500">{description}</p>
          </div>
        </div>
        <div className="absolute bottom-3 right-3">
          <button className="btn btn-primary btn-sm rounded-full text-xs px-2.5 py-1.5">
            立即前往
          </button>
        </div>
      </a>
    </motion.div>
  );
}
