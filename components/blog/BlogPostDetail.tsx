import type { LoaderReturnType } from "$live/types.ts";
import { AuthorLabel } from "deco-sites/kavak/components/ui/AuthorLabel.tsx";
import { Container } from "deco-sites/kavak/components/ui/Container.tsx";
import { SectionTitle } from "deco-sites/kavak/components/ui/SectionTitle.tsx";
import ShareLinkButton from "deco-sites/kavak/islands/ShareLinkButton.tsx";
import type {
  BlogPost,
  BlogSectionPlaces,
  BlogSectionPosts,
} from "deco-sites/std/commerce/butterCMS/types.ts";
import { useId } from "preact/hooks";
import { SectionContent } from "./BlogSection.tsx";
import { BlogPlaces } from "./sections/BlogPlaces.tsx";

export interface Props {
  post: LoaderReturnType<BlogPost>;
  ads: LoaderReturnType<BlogSectionPosts>;
  categories: LoaderReturnType<BlogSectionPlaces>;
  searchTerms: LoaderReturnType<BlogSectionPlaces>;
}

function BlogPostDetail({ post, ads, categories, searchTerms }: Props) {
  const articleId = useId();
  return (
    <Container>
      <section>
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
        <div class="flex lg:flex-row flex-col gap-4 pt-8">
          <article>
            <AuthorLabel
              publishedDate={post.publishedAt}
              author={post.author}
            />
            <style
              dangerouslySetInnerHTML={{
                __html: descriptionCSS(articleId),
              }}
            />
            <div
              class="mt-2"
              id={articleId}
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </article>
          <aside class="lg:min-w-[33%] w-full pt-4">
            <SectionContent
              type="featured_ads"
              direction="column"
              posts={ads.posts}
            />
            <section class="flex lg:flex-col sm:(flex-row flex) flex-col gap-4 mt-8">
              <article class="lg:w-full sm:w-1/2 w-full">
                <BlogPlaces
                  title={categories.title}
                  places={categories.places}
                />
              </article>
              <article class="lg:w-full sm:w-1/2 w-full">
                <BlogPlaces
                  title={searchTerms.title}
                  places={searchTerms.places}
                />
              </article>
            </section>
          </aside>
        </div>
      </section>
    </Container>
  );
}

const descriptionCSS = (id: string) => `
#${id} * {
  margin-bottom: 1rem;
}
#${id} p {
  font-size: 1rem;
  color: #333;
  line-height: 1.4;
  margin-bottom: 1.5rem;
}
#${id} h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  line-height: normal;
  margin-bottom: 1.5rem;
}
#${id} h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
  line-height: normal;
  margin-bottom: 1.5rem;
}
#${id} img {
  width: 100%;
  height: auto;
}
#${id} ul {
  padding-left: 2.5rem;
  list-style-type: disc;
}
#${id} a {
  color: #3374db;
}
`;

export default BlogPostDetail;
