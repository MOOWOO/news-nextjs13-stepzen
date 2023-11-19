import { gql } from "graphql-request";

const fetchNews = async () => {
  const query = gql`
  query MyQuery {
    getBundleListLimit50{
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
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      next: {revalidate: 0},
      body: JSON.stringify({
        query,
        variables: {}
      }),
    }
  );
  const newsResponse = await res.json();
  console.log(newsResponse)
  // Sort function by images vs not images present
  const news = newsResponse.data.getBundleListLimit50;
  return news;
};

export default fetchNews;

// Example Import
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=abc"
