import type { LoaderReturnType } from "$live/types.ts";
import { SectionTitle } from "deco-sites/kavak/components/ui/SectionTitle.tsx";
import { Container } from "deco-sites/kavak/components/ui/Container.tsx";
import type {
  BlogPostPreview,
  BlogSectionPosts,
  FieldTypes,
} from "deco-sites/std/commerce/butterCMS/types.ts";
import FeaturedAds from "./sections/FeaturedAds.tsx";
import FeaturedPosts from "./sections/FeaturedPosts.tsx";

export interface Props {
  section: LoaderReturnType<BlogSectionPosts>;
  variant: FieldTypes;
}

export interface ContentProps {
  type: FieldTypes;
  posts: BlogPostPreview[];
}

function Content({ type, posts }: ContentProps) {
  if (type === "featured_posts") {
    return <FeaturedPosts posts={posts} />;
  }

  if (type === "featured_ads") {
    return <FeaturedAds posts={posts} />;
  }

  return <p>For other variants you must use other sections</p>;
}

function BlogSection({ section, variant }: Props) {
  return (
    <Container>
      <SectionTitle>{section.title}</SectionTitle>
      <Content type={variant} posts={section.posts} />
    </Container>
  );
}

export default BlogSection;
