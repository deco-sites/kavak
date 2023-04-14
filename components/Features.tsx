import { useId } from "preact/hooks";
import Icon from "deco-sites/kavak/components/Icon.tsx";
import Button from "deco-sites/kavak/components/Button.tsx";
import { Slider } from "deco-sites/kavak/components/ui/Slider.tsx";
import SliderControllerJS from "deco-sites/kavak/islands/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  cards: Array<{
    image: LiveImage;
    title: string;
    description: string;
  }>;
  action: {
    label: string;
    href: string;
  };
}

export default function Features(props: Props) {
  const { title, cards, action } = props;
  const id = useId();

  return (
    <div id={id} class="flex flex-col w-full justify-center items-center">
      <div class="w-full max-w-[1340px] flex flex-col py-10 px-0 sm:px-5 gap-12">
        <h1 class="text-3xl font-title text-center px-8">{title}</h1>

        <div class="relative">
          <Slider
            class="gap-6 col-span-full row-start-2 row-end-5"
            snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0 h-full px-2 py-[12px]"
          >
            {cards.map((card) => (
              <div class="flex flex-1 h-full min-w-[350px] max-w-[350px] overflow-hidden rounded-lg shadow-md">
                <div class="flex flex-col gap-2 h-full">
                  <img
                    width={300}
                    height={235}
                    loading="eager"
                    alt={card.title}
                    src={card.image}
                    class="object-cover w-[350px] h-[235px] block"
                  />

                  <div class="p-4 flex flex-col gap-4 h-full">
                    <span class="text-2xl font-semibold">{card.title}</span>
                    <span class="text-lg mt-auto">{card.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <div
            data-slide="prev"
            aria-label="Previous item"
            class="flex justify-center items-center absolute z-10 h-[calc(100%-24px)] bg-black top-[12px] left-0 w-[48px] cursor-pointer opacity-60"
          >
            <Icon
              size={20}
              strokeWidth={3}
              id="ChevronLeft"
              class="text-white"
            />
          </div>

          <div
            data-slide="next"
            aria-label="Next item"
            class="flex justify-center items-center absolute z-10 h-[calc(100%-24px)] bg-black top-[12px] right-0 w-[48px] cursor-pointer opacity-60"
          >
            <Icon
              size={20}
              strokeWidth={3}
              id="ChevronRight"
              class="text-white"
            />
          </div>
        </div>

        <div class="flex flex-1 justify-center px-8">
          <Button style="w-full md:w-auto" type="primary" href={action.href}>
            {action.label}
          </Button>
        </div>

        <SliderControllerJS rootId={id} />
      </div>
    </div>
  );
}
