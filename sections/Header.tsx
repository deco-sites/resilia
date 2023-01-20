import { context } from "$live/live.ts";

import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  logo: { image: LiveImage; altText: string };
  menu: { text: string; link: string }[];
  button: { text: string; link: string };
  social: { image: string; link: string }[];
}

export default function GetStarted({ logo, menu, button, social }: Props) {
  return (
    <header class="bg-primary py-3">
      <div class="flex text-white justify-between items-center px-[15px] md:px-[15px] max-w-[1140px] m-auto">
        <div>
          <a href="/">
            <picture class="inset-0">
              <Image
                class=""
                src={logo.image}
                alt={logo.altText}
                width={120}
                height={17}
              />
            </picture>
          </a>
        </div>
        <nav class="hidden md:block">
          <ul class="flex text-[14px]">
            {menu.map((menu) => {
              return (
                <li class="hover:text-secondary">
                  <a
                    href={menu.link}
                    class="block px-5 hover:text-secondary duration-150"
                  >
                    {menu.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div>
          <ul class="flex items-center">
            <li>
              <a
                href={button.link}
                class="block border-2 border-white mx-4 py-[9px] px-10 rounded-[8px] text-[15px] hover:text-secondary hover:border-secondary duration-150"
              >
                {button.text}
              </a>
            </li>
            {social.map((social) => {
              return (
                <li class="hidden md:block">
                  <a href={social.link} class="block ml-4">
                    <picture class="inset-0">
                      <div
                        class="w-4"
                        dangerouslySetInnerHTML={{ __html: social.image }}
                      >
                      </div>
                    </picture>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <details class="md:hidden">
          <summary>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                fill="white"
              >
              </path>
            </svg>
          </summary>
          <nav class="block md:hidden fixed w-[100vw] left-0 right-0 bg-black z-10 top-[68px]">
            <ul class="flex flex-col text-[14px]">
              {menu.map((menu) => {
                return (
                  <li class="hover:text-secondary">
                    <a
                      href={menu.link}
                      class="block px-5 hover:text-secondary duration-150 py-5 text-[18px] text-center"
                    >
                      {menu.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
