import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadComments } from "../../store/actions/comments";
import Loader from "../Loader";
import Comment from "./Comment";

export const CommentList = () => {
  const param = useParams();
  const postId = parseInt(param.postId, 10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadComments(postId));
  }, [dispatch, postId]);

  const comments = useSelector((state) => state.comments.allComments);
  console.log(comments);

  if (comments.length === 0) {
    return <Loader />;
  }

  return (
    <div>
      {comments.map((comment) => {
        return <Comment comment={comment} key={comment.id} />;
      })}
    </div>
  );
};
