import fetchNewsByCategory from "../../../lib/fetchNewsByCategory";
import NewsList from "../../NewsList";
import { categories } from "../../../constants";

type Props = {
  params: { category: Category };
};

async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNewsByCategory(category);

  return (
    <div>
      {/* <h1 className="headerTitle">{category}</h1> */}
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
