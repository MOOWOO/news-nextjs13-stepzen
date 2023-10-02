import LiveTimestamp from "./LiveTimestamp";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
  mediastack: Mediastack;
};

function Mediastack({ mediastack }: Props) {
  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out">
      {mediastack.image && (
        <img
          src={mediastack.image}
          alt={mediastack.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}

      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{mediastack.title}</h2>

          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-2">{mediastack.description}</p>
          </section>

          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
            <p>{mediastack.source} -</p>
            <p>
              <LiveTimestamp time={mediastack.published_at} />
            </p>
          </footer>
        </div>

        {/* ReadMoreButton */}
        <ReadMoreButton mediastack={mediastack} />
      </div>
    </article>
  );
}

export default Mediastack;
