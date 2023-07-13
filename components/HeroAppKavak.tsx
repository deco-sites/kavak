import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface Banner {
  srcMobile: LiveImage;
  srcTablet: LiveImage;
  srcDesktop?: LiveImage;
  alt: string;
}
export interface ButtonApp {
  imgButton: LiveImage;
  alt: string;
  href: string;
}
export interface Props {
  title: HTML;
  description: string;
  /** @description Selecione caso queira priorizar o carregamento da imagem*/
  priorizarCarregamento: boolean;
  /** @default false*/
  banner: Banner;
  buttonApp: ButtonApp[];
}

export default function BannerInfo({
  title,
  description,
  priorizarCarregamento,
  banner,
  buttonApp = [],
}: Props) {
  return (
    <section class="w-full">
      <div class="w-full flex flex-col ">
        <Picture class="w-full">
          <Source
            media="(max-width: 767px)"
            src={banner.srcMobile}
            width={767}
          />
          <Source
            media="(max-width: 1199px)"
            src={banner.srcTablet}
            width={768}
          />
          <Source
            media="(min-width: 1200px)"
            src={banner.srcDesktop ? banner.srcDesktop : banner.srcMobile}
            width={1440}
          />
          <Image
            width={1920}
            src={banner.srcMobile}
            alt={banner.alt}
            loading={`${priorizarCarregamento ? "eager" : "lazy"}`}
            decoding={`${priorizarCarregamento ? "sync" : "async"}`}
            fetchPriority={`${priorizarCarregamento ? "high" : "low"}`}
            class=""
          />
        </Picture>
        <div class={`flex flex-col px-4 mt-6`}>
          <div
            class="text-[32.2px] text-base-light font-title mb-4 leading-[1.2423]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p class={`text-lg text-base-light mb-6`}>{description}</p>
          <div class={`flex`}>
            {buttonApp.map(({ imgButton, alt, href }) => (
              <a href={`${href}`}>
                <Picture class="w-full">
                  <Source
                    media="(max-width: 767px)"
                    src={`${imgButton}`}
                    width={767}
                  />
                  <Image
                    width={200}
                    src={`${imgButton}`}
                    alt={`${alt}`}
                    loading={`${priorizarCarregamento ? "eager" : "lazy"}`}
                    decoding={`${priorizarCarregamento ? "sync" : "async"}`}
                    fetchPriority={`${priorizarCarregamento ? "high" : "low"}`}
                    class=""
                  />
                </Picture>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
