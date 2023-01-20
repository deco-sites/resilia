import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  logo: LiveImage;
  text: string;
  menu: {
    title: string;
    link?: string;
    submenu?: {
      title: string;
      link?: string;
    }[];
  }[];
  social: { image: string; link: string }[];
  reservedRights: string;
}

export default function Footer({ logo, text, menu, social, reservedRights }: Props) {
  return (
    <footer class="bg-primary">
      <div class="flex flex-col md:flex-row justify-between max-w-[1140px] m-auto py-10">
        <div class="w-full md:w-[40%] text-center md:text-left">
          <img src={logo} alt="" class="mb-4 m-auto md:m-0"/>
          <p class="text-white opacity-30 text-[13px]">{text}</p>
        </div>
        <div class="flex flex-col md:flex-row w-full text-center md:text-left">
        {menu.map((menu, idx) => {
          return (
            <ul class="text-[14px] w-full md:w-[25%]">
              <li class="text-white font-bold mt-12 md:mt-0">
                <a href={menu.link}>
                {menu.title}
                </a>
              </li>
              {
                menu.submenu.map(submenu => {
                    return(
                        <li class="text-white">
                            <a href={submenu.link} class="block mt-5">
                            {submenu.title}
                            </a>
                        </li>
                    )
                })
              }
            </ul>
          );
        })}
        </div>
        <div class="mt-16 md:mt-0">
          <ul class="flex justify-center">
            {social.map((social) => {
              return (
                <li class="block">
                  <a href={social.link} class="block ml-4">
                    <picture class="inset-0">
                      <div
                        class="w-4"
                        dangerouslySetInnerHTML={{ __html: social.image }}
                      ></div>
                    </picture>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div class="py-[28px] border-t-2 border-solid border-gray border-opacity-30">
        <div class="max-w-[1140px] w-full m-auto">
            <p class="text-white text-center md:text-left opacity-30 text-[13px]">{reservedRights}</p>
        </div>
      </div>
    </footer>
  );
}
