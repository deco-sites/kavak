import type { LoaderReturnType } from "$live/types.ts";
import type { Category } from "deco-sites/std/commerce/butterCMS/types.ts";
import { Container } from "deco-sites/kavak/components/ui/Container.tsx";
import { SectionTitle } from "deco-sites/kavak/components/ui/SectionTitle.tsx";

export interface Props {
  categories: LoaderReturnType<Category[]>;
}

function BlogCategoryMenu(props: Props) {
  return (
    <Container class="mb-6 mt-14">
      <SectionTitle class="override:text-[calc(1.425rem+2.1vw)]">
        Kavak Blog
      </SectionTitle>
    </Container>
  );
}

export default BlogCategoryMenu;
