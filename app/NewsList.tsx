import AdditionalSite from "./AdditionalSite";
import AiSummaryBox from "./AiSummaryBox";
import Article from "./Article";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

type Props = {
  news: NewsResponse;
};

function NewsList({ news }: Props) {
  return (
    <>
    <AiSummaryBox />
    <SearchBox />
    <AdditionalSite />
    {/* <NavLinks /> */}

    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {news.map((bundle) => (
        <Article key={bundle.title + ""} bundle={bundle} />
      ))}
    </main></>
  );
}

export default NewsList;
