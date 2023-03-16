import { useLocation } from "react-router-dom";
import Avatar from "react-avatar";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Evaluate = (props) => {
  const location = useLocation();
  const propsData = location.state;
  const schema = yup.object().shape({
    score: yup.number().min(0).max(100).required(),
    feedback: yup.string(),
    show: yup.boolean(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="">
      <h1 className="py-4 result-head card ps-5">
        Grading Final Project Assignment Submission
      </h1>
      <div className="container-md evaluate ">
        <div className="d-flex  py-4">
          <Avatar name={`${propsData?.name}`} round />
          <div className="d-flex flex-column ps-4">
            <h2 className="text-dark">{propsData?.name}</h2>
            <h5 className="text-secondary">{propsData?.id}</h5>
          </div>
        </div>
        <div className="shadow">
          <form onSubmit={handleSubmit(onSubmit)} className="form-control">
            <>
              <label className="form-label fs-3">Score</label>
              <input
                type="text"
                className="form-control"
                {...register("score")}
                placeholder={propsData?.status ? `${propsData?.subScore}` : ""}
              />
              <p className="text-danger">{errors.score?.message}</p>
            </>
            <>
              <label className="form-label fs-3">Feedback</label>
              <textarea className="form-control" {...register("feedback")}>
                {propsData?.status
                  ? `${propsData?.feedback}`
                  : "Type Your Feedback"}
              </textarea>
              <p>{errors?.feedback?.message}</p>
            </>
            <div className="form-check form-switch pe-3 checkbox-lg">
              <input
                className="form-check-input"
                type="checkbox"
                {...register("show")}
              />
              <label className="form-check-label fs-4 ps-3">Show grade</label>
            </div>
            <button
              className="btn btn-outline-primary mt-2 px-4"
              onClick={() => (propsData?.score !== null ? "" : "")}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Evaluate;
