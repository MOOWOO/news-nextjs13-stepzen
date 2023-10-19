import LiveTimestamp from "./LiveTimestamp";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
  bundle: Bundle;
};

function Bundle({ bundle }: Props) {
  let imgpath = bundle.ai_img_path+""

  let isDonga = bundle.company.includes("동아일보");
  if (isDonga === true){
    imgpath = imgpath.replace("i/150/150/90/", "");
  }else{
    imgpath = bundle.ai_img_path+""
  }

  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out">
      {bundle.ai_img_path && (
        <img
          src={imgpath}
          alt={bundle.ai_title+""}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}

      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{bundle.ai_title}</h2>

          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-2">{bundle.ai_summary}</p>
          </section>

          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
            <p>
              <LiveTimestamp time={bundle.evt_date+""} />
            </p>
          </footer>
        </div>

        {/* ReadMoreButton */}
        <ReadMoreButton bundle={bundle} />
      </div>
    </article>
  );
}

export default Bundle;
