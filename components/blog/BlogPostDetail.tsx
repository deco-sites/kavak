import type { LoaderReturnType } from "$live/types.ts";
import Icon from "deco-sites/kavak/components/Icon.tsx";
import { AuthorLabel } from "deco-sites/kavak/components/ui/AuthorLabel.tsx";
import { Container } from "deco-sites/kavak/components/ui/Container.tsx";
import { SectionTitle } from "deco-sites/kavak/components/ui/SectionTitle.tsx";
import ShareLinkButton from "deco-sites/kavak/islands/ShareLinkButton.tsx";
import type { BlogPost } from "deco-sites/std/commerce/butterCMS/types.ts";
import { useId } from "preact/hooks";
import { BlogBreadcrumb } from "./BlogBreadcrumb.tsx";

export interface Props {
  post: LoaderReturnType<BlogPost>;
}

function BlogPostDetail({ post }: Props) {
  const articleId = useId();
  return (
    <Container>
      <section>
        <div class="mb-6 mt-7">
          <BlogBreadcrumb category={post.category} title={post.title} />
        </div>
        <div class="flex flex-nowrap items-end mb-4">
          <SectionTitle class="text-2xl w-full mb-0">{post.title}</SectionTitle>
          <ShareLinkButton
            clippedText={`/blog/${post.slug}`}
            withDomain
          />
        </div>
        <div class="relative">
          <p class="uppercase text-white absolute top-8 px-4 py-2 bg-primary">
            <span class="block text-base leading-4">{post.tags[0]}</span>
            <span
              aria-hidden="true"
              class="absolute w-0 h-full left-full top-0 border-t-primary border-t-[2rem] border-b-0 border-l-0 border-r-[0.75rem] border-transparent"
            />
          </p>
          <img src={post.image} alt={post.imageAlt} />
        </div>
        <article class="mt-8">
          <AuthorLabel publishedDate={post.publishedAt} author={post.author} />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                #${articleId} * {
                  margin-bottom: 1rem;
                }
                #${articleId} p {
                  font-size: 1rem;
                  color: #333;
                  line-height: 1.4;
                  margin-bottom: 1.5rem;
                }
                #${articleId} h2 {
                  font-size: 1.5rem;
                  font-weight: 700;
                  color: #000;
                  line-height: normal;
                  margin-bottom: 1.5rem;
                }
                #${articleId} h3 {
                  font-size: 1.25rem;
                  font-weight: 700;
                  color: #000;
                  line-height: normal;
                  margin-bottom: 1.5rem;
                }
                #${articleId} img {
                  width: 100%;
                  height: auto;
                }
                #${articleId} ul {
                  padding-left: 2.5rem;
                  list-style-type: disc;
                }
                #${articleId} a {
                  color: #3374db;
                }
              `,
            }}
          />
          <div
            class="mt-2"
            id={articleId}
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </article>
      </section>
    </Container>
  );
}

export default BlogPostDetail;
