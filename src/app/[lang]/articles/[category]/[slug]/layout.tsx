/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type React from "react";

// import {ArticleSelect} from "@/components/ArticleSelect";

// import {fetchAPI} from "@/utils/fetch-api";

// async function fetchSideMenuData(filter?: string) {
//   try {
//     const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
//     const options = {headers: {Authorization: `Bearer ${token}`}};

//     const categoriesResponse = await fetchAPI(
//       "/categories",
//       {populate: "*"},
//       options
//     );

//     const articlesResponse = await fetchAPI(
//       "/articles",
//       filter
//         ? {
//             filters: {
//               category: {
//                 name: filter,
//               },
//             },
//           }
//         : {},
//       options
//     );

//     return {
//       articles: articlesResponse.data,
//       categories: categoriesResponse.data,
//     };
//   } catch (error) {
//     console.error(error);
//   }
// }

// interface Category {
//   id: number;
//   attributes: {
//     name: string;
//     slug: string;
//     articles: {
//       data: Array<object>;
//     };
//   };
// }

// interface Article {
//   id: number;
//   attributes: {
//     title: string;
//     slug: string;
//   };
// }

// interface Data {
//   articles: Article[];
//   categories: Category[];
// }

export default function LayoutRoute({
  children,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
    category: string;
  };
}) {
  // const {categories, articles} = (await fetchSideMenuData(category)) as Data;

  return (
    <section className="container p-8 mx-auto space-y-6 sm:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4">
        <div className="col-span-2">{children}</div>
        <aside>
          {/* <ArticleSelect
            categories={categories}
            articles={articles}
            params={params}
          /> */}
        </aside>
      </div>
    </section>
  );
}

/*export async function generateStaticParams() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/articles`;
  const options = {headers: {Authorization: `Bearer ${token}`}};
  const articleResponse = await fetchAPI(
    path,
    {
      populate: ["category"],
    },
    options
  );

  return articleResponse.data.map(
    (article: {
      attributes: {
        slug: string;
        category: {
          slug: string;
        };
      };
    }) => ({slug: article.attributes.slug, category: article.attributes.slug})
  );
} */
