import { gql } from "graphql-request";

const fetchNewsByCategory = async (category?: Category | string,) => {

  const query = gql`
  query MyQuery($category: String) {
    getBundleListByCategoryLimit50(category: $category) {
        summary
        author
        company
        evt_date
        id
        link
        ai_img_path
        media_type
        published
        published_parsed
        summary_detail_type
        summary_detail_value
        title
        ai_img_path
        ai_summary
        ai_title
        prompt 
      }
    }
  `;

  // Fetch function with Next.js 13 caching...
  const res = await fetch(
    "https://saintepazanne.stepzen.net/api/hissing-quokka/__graphql",
    {
      method: "POST",
      cache: "default", //"no-cache",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          category: category,
        }
      }),
    }
  );
  const newsResponse = await res.json();
  console.log(newsResponse)
  const news = newsResponse.data.getBundleListByCategoryLimit50;
  return news;
};

export default fetchNewsByCategory;