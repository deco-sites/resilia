import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

import QuillText from "$live/std/ui/components/QuillText.tsx";
import type { HTML } from "$live/std/ui/types/HTML.ts";
import LinkButton from "../components/LinkButton.tsx";

export interface Props {
  imageDesktop: LiveImage;
  imageMobile: LiveImage;
  title: HTML;
  subtitle: string;
  button: { text: string; link: string };
}

export default function Banner(
  { imageDesktop, imageMobile, title, subtitle, button }: Props,
) {
  return (
    <div class="relative">
      <picture class="inset-0 block max-w-[1420px] mx-auto">
        <source
          media="(max-width: 1029px)"
          srcset={imageMobile}
        />
        <source
          media="(min-width: 1030px)"
          srcset={imageDesktop}
        />
        <Image
          class="object-cover w-full h-full inset-0 h-[150vw] md:h-[125vw] md:h-auto"
          sizes="(max-width: 640px) 75vw, 50vw"
          src={imageDesktop}
          width={300}
          height={300}
        />
      </picture>
      <div class="h-full w-full absolute text-secondary top-0">
        <div class="flex flex-col justify-center h-full w-full max-w-screen-xl m-auto px-5">
          <div class="main-title mx-auto tracking-[-2px] max-w-[345px] text-primary text-center font-bold text-[40px] md:text-[57px]">
            <QuillText html={title} />
          </div>
          <p class="text-[16px] text-primary md:text-[18px] max-w-[345px] md:max-w-[650px] text-center mx-auto mt-2.5 md:mt-0">
            {subtitle}
          </p>
          <div class="inline-flex flex-col items-center justify-center lg:flex-row">
            <LinkButton text={button.text} link={button.link} mode="yellow" />
          </div>
        </div>
      </div>
    </div>
  );
}
