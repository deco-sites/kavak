import type { LoaderReturnType } from "$live/types.ts";
import type {
  BlogSectionPosts,
  FieldTypes,
} from "deco-sites/std/commerce/butterCMS/types.ts";

export interface Props {
  section: LoaderReturnType<BlogSectionPosts>;
  variant: FieldTypes;
}

function BlogSection(props: Props) {
  return (
    <div>
      BlogSection
    </div>
  );
}

export default BlogSection;
