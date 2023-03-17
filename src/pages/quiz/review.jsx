import { useState } from "react";
import { MdOutlineCancel, MdOutlineCheckCircle } from "react-icons/md";

const Review = () => {
  const [question] = useState([
    {
      id: 1,
      que: "Lorem ipsum donsectLorem ipsum dolor si Odio morbi quis commodo odio aenean sed adipiscing. Pretium quam vulputate dignissim suspendisse in est ante. Cursus risus at ultrices mi tempus imperdiet. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Semper feugiat nibh sed pulvinar proin.t dolore magna aliqua image.png",
      ans: ["answer 1", "answer 2", "answer 3", "ans 4"],
      correctAns: "ans 4",
      submittedAns: "ans 4",
    },
    {
      id: 2,
      que: "Consectetur adipiscing elit, liqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Tortor at risus viverra adipiscing at in tellus. Purus non enim praesent elementum facilisis leo vel fringilla est. Rutrum quisque non tellus orci. Odio morbi quis commodo odio aenean sed adipiscing. Pretium quam vulputusmodtempor incididunt ut labore.",
      ans: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correctAns: "answer 1",
      submittedAns: "answer 3",
    },
    {
      id: 3,
      que: "Sit amet, consectetur adipiscing elit, sLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra.ed do eiusmodtempor incididunt ut labore et dolore.",
      ans: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correctAns: "answer 4",
      submittedAns: "answer 2",
    },
    {
      id: 4,
      que: "Dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra. eiusmodtempor incididunt ut labore et dolore magna.",
      ans: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correctAns: "answer 3",
      submittedAns: "answer 3",
    },
  ]);

  const checkStatus = (correctAns, submittedAns) => {
    return correctAns === submittedAns ? true : false;
  };

  return (
    <>
      <h3 className="py-4 result-head card ps-5">Unit 1 Quiz</h3>
      <div className=" container-md">
        {question.map((c) => (
          <div>
            <div className="question">
              <h5 className="quesno d-flex align-items-center justify-content-between">
                Question: {c.id}
                {checkStatus(c.correctAns, c.submittedAns) ? (
                  <MdOutlineCheckCircle className=" fs-2" color="#4fdc6e" />
                ) : (
                  <MdOutlineCancel className="fs-2" color="#ff0000" />
                )}
              </h5>
              <div className="que">
                <p key={c.id}>{c.que}</p>
                <div className="row m-0">
                  {c.ans.map((an) => (
                    <div className="col-6">
                      {c.correctAns === an ? (
                        <div className={`badge ans-badge corr-ans  m-2 `}>
                          {an}
                        </div>
                      ) : an === c.submittedAns ? (
                        <div className={`badge ans-badge wrong-ans m-2`}>
                          {an}
                        </div>
                      ) : (
                        <span className={`badge ans-badge other-ans m-2`}>
                          {an}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Review;
