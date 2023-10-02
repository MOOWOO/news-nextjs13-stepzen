import { notFound } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";

type Props = {
  searchParams?: Mediastack;
};

function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const mediastack: Mediastack = searchParams;

  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {mediastack.image && (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={mediastack.image}
            alt={mediastack.title}
          />
        )}

        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {mediastack.title}
          </h1>

          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">By: {mediastack.author}</h2>
            <h2 className="font-bold pl-4">Source: {mediastack.source}</h2>
            <p className="pl-4">
              <LiveTimestamp time={mediastack.published_at} />
            </p>
          </div>

          <p className="pt-4">{mediastack.description}</p>
          <p className="pt-4">Link - {mediastack.url}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
