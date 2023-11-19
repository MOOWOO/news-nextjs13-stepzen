import { notFound } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";

type Props = {
  searchParams?: Bundle;
};

function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const bundle: Bundle = searchParams;

  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {bundle.ai_img_path+"" && (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={bundle.ai_img_path+""}
            alt={bundle.ai_title+""}
          />
        )}

        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {bundle.ai_title}
          </h1>
          <p className="text-slate-600">
              <LiveTimestamp time={bundle.evt_date+""} />
          </p>
          <div className="flex">
            {/* <h2 className="font-bold">By: {bundle.author}</h2> */}
            <h2 className="font-normal">{bundle.ai_summary}</h2> 
            

          </div>

          {/* <p className="pt-4">{bundle.summary_detail_value}</p> */}
          <br/>
          <br/>
          <a className="text-xs line-clamp-2 text-sky-400" href={bundle.link+""}> : LINK</a>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
