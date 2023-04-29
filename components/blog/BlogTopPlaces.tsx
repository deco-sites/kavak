import type { LoaderReturnType } from "$live/types.ts";
import type { BlogSectionPlaces } from "deco-sites/std/commerce/butterCMS/types.ts";

export interface Props {
  categories: LoaderReturnType<BlogSectionPlaces>;
  searchTerms: LoaderReturnType<BlogSectionPlaces>;
}

function BlogTopPlaces(props: Props) {
  console.log(props);
  return (
    <div>
      BlogTopPlaces
    </div>
  );
}

export default BlogTopPlaces;
