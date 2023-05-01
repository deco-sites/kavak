import type { BlogPostPreview } from "deco-sites/std/commerce/butterCMS/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { AuthorLabel } from "deco-sites/kavak/components/ui/AuthorLabel.tsx";

export interface Props {
  post: BlogPostPreview;
  withAuthor?: boolean;
  withSummary?: boolean;
  hideMobileSummary?: boolean;
  hideMobileImage?: boolean;
  size?: "small" | "normal" | "large";
}

function PostCard(
  {
    post,
    withSummary = false,
    hideMobileSummary = false,
    hideMobileImage = false,
    withAuthor = false,
    size = "normal",
  }: Props,
) {
  const imageSize = {
    normal: { height: 165, width: 446 },
    small: { height: 129, width: 320 },
    large: { height: 356, width: 962 },
  };

  return (
    <article
      class={`${
        size === "large" ? "lg:max-w-full" : ""
      } max-w-[326px] overflow-hidden rounded-md shadow-base flex w-full`}
    >
      <a href={`/blog/${post.slug}`} class="flex flex-col">
        <div
          class={`${
            hideMobileImage ? "hidden md:flex" : "flex"
          } items-center justify-center relative`}
        >
          <Picture
            preload
            class="col-start-1 col-span-1 row-start-1 row-span-1"
          >
            <Source
              src={post.image}
              width={imageSize.normal.width}
              height={imageSize.normal.height}
              media="(max-width: 992px)"
            />
            <Source
              src={post.image}
              width={imageSize[size].width}
              height={imageSize[size].height}
              media="(min-width: 992px)"
            />
            <img
              width="100%"
              height="100%"
              src={post.image}
              alt={post.imageAlt}
              class={`lg:(h-[${
                imageSize[size].height
              }px]) w-auto h-[${imageSize.normal.height}px] object-cover`}
            />
          </Picture>
        </div>
        <div
          class={`${
            post.ctaText ? "md:h-[184px]" : ""
          } flex flex-col justify-between`}
        >
          <div class="flex flex-col justify-center h-full p-4 gap-2 flex-1">
            <p class="uppercase text-primary text-xs font-bold tracking-wider leading-3">
              {post.category.name}
            </p>
            <h3 class="text-xl leading-5 font-bold">{post.title}</h3>
            {withAuthor
              ? (
                <AuthorLabel
                  publishedDate={post.publishedAt}
                  author={post.author}
                />
              )
              : null}
            {withSummary
              ? (
                <p
                  class={`${hideMobileSummary ? "hidden lg:block" : ""} ${
                    post.ctaText ? "line-clamp-5" : "line-clamp-3"
                  } leading-4 text-base-lighter`}
                >
                  {post.summary}
                </p>
              )
              : null}
          </div>
          {post.ctaText ? <a href={`/${post.slug}`}>{post.ctaText}</a> : null}
        </div>
      </a>
    </article>
  );
}

export default PostCard;
