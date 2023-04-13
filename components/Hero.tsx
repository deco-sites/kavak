import Icon from "deco-sites/kavak/components/Icon.tsx";
import Button from "deco-sites/kavak/components/Button.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  description: HTML;
  /** @default blue */
  theme: "blue" | "white";
  actions: {
    primary?: {
      label: string;
      href: string;
    };
    secondary?: {
      label: string;
      href: string;
    };
  };
  /** @description value in pixels */
  height: {
    /** @default 500 */
    desktop: number;
    /** @default 500 */
    tablet: number;
    /** @default 500 */
    mobile: number;
  };
  images: {
    background?: {
      desktop: LiveImage;
      tablet: LiveImage;
      mobile: LiveImage;
    };
    detail?: {
      desktop: LiveImage;
      tablet: LiveImage;
      mobile: LiveImage;
    };
    /** @description inject tailwind classes into detail image */
    detailClasses?: string;
    detailPositon?: {
      /** @default right */
      desktop: "right" | "left";
      /** @default bottom */
      tablet: "right" | "left";
      /** @default bottom */
      mobile: "top" | "bottom";
    };
  };
}

export default function Hero(props: Props) {
  const { actions, description, height, images, theme, title } = props;

  return (
    <div class={generateContainerClasses(props)}>
      {images.background && <BackgroundImage {...props} />}

      <div class={generateInnerContainerClasses(props)}>
        <div class="flex flex-col gap-6 md:max-w-[400px] lg:max-w-[600px] w-full">
          <h1 class="font-title text-2xl md:text-4xl text-center md:text-left">
            {title}
          </h1>

          <div
            class="hidden md:block text-2xl"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {actions.primary && (
            <div>
              <Button
                style="w-full md:w-auto text-center"
                href={actions.primary.href}
                type={theme === "blue" ? "secondary" : "primary"}
              >
                {actions.primary.label}
              </Button>
            </div>
          )}

          {actions.secondary && (
            <div class="flex flex-row items-center justify-center md:justify-start gap-1 hover:gap-3">
              <a class="text-sm md:text-lg" href={actions.secondary.href}>
                {actions.secondary.label}
              </a>

              <Icon
                width={20}
                height={20}
                strokeWidth={2}
                id="ChevronRight"
                class="hidden md:block"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BackgroundImage(props: Props) {
  const { height, images, title } = props;

  return (
    <Picture class={generateBackgroundImageClasses(props)}>
      <Source
        src={images.background!.mobile}
        width={375}
        height={height.mobile}
        media="(max-width: 767px)"
      />
      <Source
        src={images.background!.tablet}
        width={768}
        height={height.tablet}
        media="(min-width: 768px) and (max-width: 1023px)"
      />
      <Source
        src={images.background!.desktop}
        width={1440}
        height={height.desktop}
        media="(min-width: 1024px)"
      />

      <img
        alt={title}
        src={images.background!.desktop}
        class="w-full h-full object-cover object-top md:object-right"
      />
    </Picture>
  );
}

function generateContainerClasses(props: Props) {
  const { height, theme, images } = props;
  const isMobileDetailOnTop = images.detailPositon?.mobile === "top";

  const classes = [
    // height classes
    `h-[${height.mobile}px]`,
    `md:h-[${height.tablet}px]`,
    `lg:h-[${height.desktop}px]`,

    // paddings
    "p-8",

    // positioning
    "flex",
    "flex-col",
    "md:justify-center",
    isMobileDetailOnTop ? "justify-end" : "justify-start",
    "items-center",
    "relative",

    // colors
    theme === "blue" ? "bg-primary" : "bg-white",
    theme === "blue" ? "text-white" : "text-primary",
  ];

  return classes.join(" ");
}

function generateInnerContainerClasses(props: Props) {
  const { images } = props;
  const isTabletDetailOnRight = images.detailPositon?.tablet === "right";
  const isDesktopDetailOnRight = images.detailPositon?.desktop === "right";

  const classes = [
    // base classes
    "flex",
    "z-10",
    "w-full",
    "max-w-[1320px]",

    // positioning
    isTabletDetailOnRight ? "md:justify-start" : "md:justify-end",
    isDesktopDetailOnRight ? "lg:justify-start" : "lg:justify-end",
  ];

  return classes.join(" ");
}

function generateBackgroundImageClasses(props: Props) {
  const { height } = props;

  const classes = [
    // height classes
    "w-full",
    `h-[${height.mobile}px]`,
    `md:h-[${height.tablet}px]`,
    `lg:h-[${height.desktop}px]`,

    // positioning
    "absolute",
    "top-0",
    "left-0",
    "z-0",
  ];

  return classes.join(" ");
}
