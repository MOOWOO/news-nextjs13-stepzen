import Article from "./Article";

type Props = {
  news: NewsResponse;
};

function NewsList({ news }: Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {news.data.map((mediastack) => (
        <Article key={mediastack.title} mediastack={mediastack} />
      ))}
    </main>
  );
}

export default NewsList;
