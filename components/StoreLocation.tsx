import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  title: HTML;
  address: HTML;
  openingHours: Array<{
    days: string;
    hours: string;
  }>;
}

export default function StoreLocation(props: Props) {
  const { title, address, openingHours } = props;

  return (
    <>
      <div class="w-[100vw] h-[100vh] fixed top-0 left-0 z-10 flex justify-center items-center bg-black/50">
        <div class="w-[90vw] max-w-[800px] min-h-[520px] bg-red">
          <div>
            <div
              class="text-3xl font-title lg:text-5xl"
              dangerouslySetInnerHTML={{ __html: title }}
            >
            </div>
          </div>
          <div>
            <div
              class="text-3xl font-title lg:text-5xl"
              dangerouslySetInnerHTML={{ __html: address }}
            >
            </div>
          </div>
          <div>
            {/* Aqui vai a integração com o maps */}
          </div>
          <div>
            {openingHours?.map(({ days, hours }) => {
              return (
                <div class="w-[100px] flex flex-col justify-center items-start">
                  <p>{days}</p>
                  <span>{hours}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
