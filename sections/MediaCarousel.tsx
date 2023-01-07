import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  media: { image: LiveImage; link: string }[];
  text: string;
}

export default function MediaCarousel({ media, text }: Props) {
  return (
    <div class="w-full bg-white py-14">
      <div class="flex max-w-[1140px] m-auto items-center justify-between">
        {media.map((media) => {
          return (
            <div>
              <a href={media.link} class="block opacity-40">
                <img
                  src={media.image}
                  alt=""
                  class="max-w-[100px] h-10 object-contain"
                />
              </a>
            </div>
          );
        })}
      </div>
      <p class="text-center text-gray mt-6">{text}</p>
    </div>
  );
}
