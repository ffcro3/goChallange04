import React from 'react';

// import { Container } from './styles';

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="">
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img
            src={comment.author.avatar}
            alt={comment.author.name + ` Profile Picture`}
            className="avatar"
          />
          <span className="commments">
            <strong>{comment.author.name}</strong> {comment.content}
          </span>
        </div>
      ))}
    </div>
  );
}

function PostImage({ postType }) {
  return (
    <div>
      <img
        src={postType.imageUrl.path}
        className="post-image"
        alt={postType.imageUrl.name}
      />
    </div>
  );
}

function PostItem({ author, date, content, comments, postType }) {
  if (postType.image) {
    return (
      <div className="post">
        <PostHeader author={author} date={date} />
        <p className="post-content">{content}</p>
        <PostImage postType={postType} />
        <div className="divider"></div>
        <PostComments comments={comments} />
      </div>
    );
  }
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <div className="divider"></div>
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;
