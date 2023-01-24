import Slider from "../islands/Slider.tsx";
import { useId } from "preact/hooks";

import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  media: { image: LiveImage; link: string }[];
  text: string;
}

export default function MediaCarousel({ media, text }: Props) {
  let id = useId();
  id += "media-query";

  return (
    <div
      id={id}
      class="max-w-[1140px] m-auto px-4 relative w-full overflow-hidden mb-20"
    >
      <div
        class={`flex justify-between transition w-[${
          media.length * 2 * 100
        }%] md:w-[${media.length * 2 * 20}%]`}
        data-slider-content
      >
        {media.map((media, idx) => {
          return (
            <div
              id={`${id}-${idx}`}
              class="w-[100%] md:w-[20%] rounded-[32px] mx-5 p-8"
            >
              <a href={media.link} class="block opacity-40 flex justify-center">
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
      <Slider
        id={id}
        items={media.length * 2}
        itemsPerPageDesktop={5}
        itemsPerPageMobile={1}
        delay={2 * 1000}
        autoTransition={true}
      />
    </div>
  );
}
