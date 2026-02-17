import React from "react";

const commentsData = [
  {
    name: "Raja Manish",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Raja Manish",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Raja Manish",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Raja Manish",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Raja Manish",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Raja Manish",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Raja Manish",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Raja Manish",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Raja Manish",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Raja Manish",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Raja Manish",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Raja Manish",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Raja Manish",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="py-5 flex shadow-sm rounded-lg bg-gray-100">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png"
      />
      <div className="px-4">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
    // Dont use index as keys
  return comments?.map((comment,index) => (
    <div>
      <Comment key={index} data={comment} />
        <div className="pl-2 ml-5 border border-blue-50 ">
            <CommentList comments={comment.replies} />
        </div>
     </div>
     )
    );   
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-[1200px]">
      <h1 className="font-bold from-cyan-400 text-2xl">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
