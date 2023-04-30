import { Head } from "$fresh/runtime.ts";
import type { BlogPostPreview } from "deco-sites/std/commerce/butterCMS/types.ts";

export interface Props {
  post: BlogPostPreview;
  withAuthor?: boolean;
  withSummary?: boolean;
  hideMobileSummary?: boolean;
  size?: "small" | "normal" | "large";
}

function PostItem(
  {
    post,
    withSummary = false,
    hideMobileSummary = false,
    withAuthor = false,
    size = "normal",
  }: Props,
) {
  const imageSize = {
    normal: 165,
    small: 129,
    large: 356,
  };
  return (
    <article
      class={`${
        size === "large" ? "lg:max-w-full" : ""
      } max-w-[326px] overflow-hidden rounded-md shadow-item flex w-full`}
    >
      <a href={`/blog/${post.slug}`} class="flex flex-col">
        <div class="flex items-center justify-center relative">
          <img
            width="100%"
            height="100%"
            src={post.image}
            alt={post.imageAlt}
            class={`lg:(h-[${
              imageSize[size]
            }px]) w-auto h-[${imageSize.normal}px] object-cover`}
          />
        </div>
        <div class="flex flex-col justify-center h-full p-4 gap-2 flex-1">
          <p class="uppercase text-primary text-xs font-bold tracking-wider leading-3">
            {post.category.name}
          </p>
          <h3 class="text-xl leading-5 font-bold">{post.title}</h3>
          {withAuthor
            ? (
              <div>
                <p>{post.author}</p>
                {
                  /**
                   * When implemented the locale changer just create a island to get the locale and parse it
                   * DO NOT add this whole component on island!
                   */
                }
                <p>{post.publishedAt}</p>
              </div>
            )
            : null}
          {withSummary
            ? (
              <p
                class={`${
                  hideMobileSummary ? "hidden lg:block" : ""
                } leading-4 text-base-lighter line-clamp-3`}
              >
                {post.summary}
              </p>
            )
            : null}
        </div>
      </a>
    </article>
  );
}

export default PostItem;
