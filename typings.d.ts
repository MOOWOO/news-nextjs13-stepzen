type Bundle = {
  id : int
  company : String
  title : String
  link : String
  author : String
  published : String
  published_parsed : String
  summary : String
  media_type : String
  media_content : String
  summary_detail_type : String
  summary_detail_value : String
  ai_img_path: String
  ai_summary: String
  ai_title: String
  prompt: String
  evt_date : timestamp
};

type Pagination = {
  count: int;
  limit: int;
  offset: int;
  total: int;
};

type NewsResponse = {
  map(arg0: (bundle: any) => JSX.Element): React.ReactNode;
  data: Bundle[];
};

type Category =
|"politics"
|"national"
|"economy"
|"international"
|"science"
|"culture"
|"sports";
