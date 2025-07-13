'use client';
import Image from 'next/image';

type CardItem = {
  id: number;
  title: string;
  year: string;
  imageUrl: string;
};

interface CardGridProps {
  data: CardItem[];
}

export const MediaCardGrid = ({ data }: CardGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative h-80 overflow-hidden shadow-md"
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover grayscale"
          />
          <div className="absolute bottom-0 text-white p-4 w-full font-montserrat font-bold">
            <p className="">{item.title}</p>
            <p className="mt-1">{item.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
