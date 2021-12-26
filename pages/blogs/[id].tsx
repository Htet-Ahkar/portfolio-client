import { useRouter } from "next/router";
//Components
import { Carousel } from "../../components";
///API
import * as api from "../../api";
//Dependencies
import moment from "moment";

const blog = ({ blog }) => {
  const router = useRouter();

  //Split body to chunks
  const chunks = blog.body.split("<br/>");

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen p-5 bg-bg
    dark:bg-reading
      md:px-12"
    >
      <div
        className="w-full h-full flex flex-col gap-5 items-center justify-start
      md:w-blogDetailsWidth
      prose"
      >
        {/* Title */}
        <h1
          className="text-xl font-bold text-primary text-center
      dark:text-dark-secondary
        md:text-3xl"
        >
          {blog.title}
        </h1>
        {/* Photo */}
        {blog.selectedFiles.length > 0 && (
          <Carousel files={blog.selectedFiles} title={blog.title} />
        )}

        {/* Date */}
        <span
          className="w-full justify-center items-start pl-3 text-gray-500 text-sm
        md:text-base"
        >
          {moment(blog.createdAt).format("MMM DD, YYYY")}
        </span>
        {/* Body */}
        <div
          className="text-base text-gray-900
        dark:text-gray-100
        md:text-lg"
        >
          {chunks.length > 0 &&
            chunks.map((chunk, index) => <p key={index}>{chunk}</p>)}
        </div>
        {/* Categories */}
        <div className="w-full flex gap-2 flex-wrap">
          {blog.categories.map((category, index) => (
            <div
              className="bg-primary text-primaryText rounded-md p-2 text-center text-sm
            dark:bg-dark-primary dark:text-dark-primaryText"
              key={index}
            >
              {category}
            </div>
          ))}
        </div>
        {/* Views */}
        <span
          className="w-full pl-3 text-sm font-semibold text-gray-800
      dark:text-gray-500"
        >
          {blog.viewCount == 0
            ? `Be The First.`
            : `${blog.viewCount} ${blog.viewCount > 1 ? `views` : `view`} `}
          on this blog.
        </span>
      </div>
    </div>
  );
};

export default blog;

export async function getServerSideProps({ params: { id } }) {
  const {
    data: { data },
  } = await api.fetchBlog(id);

  return {
    props: {
      blog: data,
    },
  };
}
