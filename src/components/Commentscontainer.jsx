import { commentsData } from "../utils/constants";

const Comment = ({ comment }) => {
  const { name, text } = Array.from(comment);

  return (
    <>
      <div className=" p-3 flex m-1 rounded-2xl bg-slate-300">
        <img
          className=" h-10 rounded-full  cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU"
          alt=" User"
        />
        <div className=" pl-5 ">
          <h1 className=" font-semibold">{comment.name}</h1>
          <h1>{comment.text}</h1>
        </div>
      </div>
    </>
  );
};

const CommentList = ({ data }) => {
  return data.map((comment, i) => (
    <>
      <Comment comment={comment} key={i} />

      <div className=" pl-8 border-l-2 border-black-800">
        <CommentList data={comment.replies} />
      </div>
    </>
  ));
};

const Commentscontainer = () => {
  return (
    <div>
      <h1 className=" pl-5 font-extrabold text-xl">Comments :</h1>
      <CommentList data={commentsData} />
    </div>
  );
};

export default Commentscontainer;
