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
  /** @default false */
  hideDescriptionOnMobile?: boolean;
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
  height?: {
    /** @default 500 */
    desktop?: number;
    /** @default 500 */
    tablet?: number;
    /** @default 500 */
    mobile?: number;
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
  const {
    actions,
    description,
    images,
    theme,
    title,
  } = props;

  return (
    <div class={generateContainerClasses(props)}>
      {images.background && <BackgroundImage {...props} />}

      <div class={generateInnerContainerClasses(props)}>
        <div class="flex flex-col gap-6 md:max-w-[400px] lg:max-w-[600px] w-full">
          <h1 class={generateTitleClasses(props)}>{title}</h1>

          <div
            class={generateDescriptionClasses(props)}
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

        {images.detail && (
          <Picture class={generateDetailClasses(props)}>
            <Source
              width={375}
              src={images.detail.mobile}
              media="(max-width: 767px)"
            />
            <Source
              width={768}
              src={images.detail.tablet}
              media="(min-width: 768px) and (max-width: 1023px)"
            />
            <Source
              width={1440}
              src={images.detail.desktop}
              media="(min-width: 1024px)"
            />
            <img
              alt={title}
              width="100%"
              height="100%"
              src={images.detail.desktop}
              class="w-full h-full object-contain"
            />
          </Picture>
        )}
      </div>
    </div>
  );
}

function BackgroundImage(props: Props) {
  const { images, title } = props;

  return (
    <Picture class={generateBackgroundImageClasses(props)}>
      <Source
        src={images.background!.mobile}
        width={375}
        media="(max-width: 767px)"
      />
      <Source
        src={images.background!.tablet}
        width={768}
        media="(min-width: 768px) and (max-width: 1023px)"
      />
      <Source
        src={images.background!.desktop}
        width={1440}
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
    height?.mobile ? `h-[${height.mobile}px]` : "h-full",
    height?.tablet ? `md:h-[${height.tablet}px]` : "md:h-full",
    height?.desktop ? `lg:h-[${height.desktop}px]` : "lg:h-full",

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
    theme === "blue" ? "text-white" : "text-primary-dark",
  ];

  return classes.join(" ");
}

function generateInnerContainerClasses(props: Props) {
  const { images } = props;
  const isTabletDetailOnRight = images.detailPositon?.tablet === "right";
  const isDesktopDetailOnRight = images.detailPositon?.desktop === "right";
  const isMobileDetailOnTop = images.detailPositon?.mobile === "top";

  const classes = [
    // base classes
    "flex",
    "z-10",
    "w-full",
    "relative",
    "items-center",
    "max-w-[1320px]",
    "justify-between",

    // positioning
    isTabletDetailOnRight ? "md:flex-row" : "md:flex-row-reverse",
    isDesktopDetailOnRight ? "lg:flex-row" : "lg:flex-row-reverse",
    isMobileDetailOnTop ? "flex-col-reverse" : "flex-col",
  ];

  return classes.join(" ");
}

function generateBackgroundImageClasses(props: Props) {
  const { height } = props;

  const classes = [
    // height classes
    "w-full",
    height?.mobile ? `h-[${height.mobile}px]` : "h-full",
    height?.tablet ? `md:h-[${height.tablet}px]` : "md:h-full",
    height?.desktop ? `lg:h-[${height.desktop}px]` : "lg:h-full",

    // positioning
    "absolute",
    "top-0",
    "left-0",
    "z-0",
  ];

  return classes.join(" ");
}

function generateTitleClasses(props: Props) {
  const { hideDescriptionOnMobile } = props;

  const classes = [
    hideDescriptionOnMobile ? "text-center" : "text-left",
    hideDescriptionOnMobile ? "text-2xl" : "text-3xl",
    "font-title",
    "md:text-4xl",
    "md:text-left",
  ];

  return classes.join(" ");
}

function generateDescriptionClasses(props: Props) {
  const { hideDescriptionOnMobile } = props;

  const classes = [
    hideDescriptionOnMobile ? "hidden" : "block",
    "md:block",
    "text-lg",
    "md:text-2xl",
  ];

  return classes.join(" ");
}

function generateDetailClasses(props: Props) {
  const { images } = props;

  const classes = [
    "mt-6",
    "md:mt-0",
    "md:mx-12",
    images.detailClasses,
  ];

  return classes.join(" ");
}
