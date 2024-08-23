import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./helpsection.scss";
import TitleSection from "../titleSection/TitleSection";

const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Name is required*")
      .matches(/^.{3,255}$/, "Name should be minimum 3 characters.")
      .matches(
        /^[a-zA-Z][a-zA-Z\-\ \.]{2,}$/i,
        "Name should have alphabets only."
      ),
    mobileNumber: yup
      .string()
      .required("Phone Number is Required*")
      .matches(/^[0-9]{10}$/, "Mobile No. should be 10 digits NUMBER."),
    comment: yup.string().required("Message is required*").min(3).max(300),
  })
  .required();

function HelpSection() {
  const [formStatus, setFormStatus] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      mobileNumber: "",
      comment: "",
    },
  });
  const { errors } = formState;

  function onSubmit(data) {
    var bodyFormData = new FormData();
    bodyFormData.append("entry.752584244", "90sGameVault -  " + data.name);
    bodyFormData.append("entry.1585333184", "90sGameVault -  " + data.mobileNumber);
    bodyFormData.append("entry.539832214", "90sGameVault -  " + data.comment);
    axios
      .post(
        "https://docs.google.com/forms/u/1/d/e/1FAIpQLSe3vgR2rNrzQbLHZGjAa8kDjCra3diNh6Bl4xa7g0xQVuOz8Q/formResponse",
        bodyFormData
      )
      .then((response) => {
        setFormStatus(true);
        reset();
      })
      .catch((error) => {
        setFormStatus(true);
      });
  }

  return (
    <div className="helpusform">
      <div className = "titleDiv">
        <TitleSection title="Reach out to me" />
      </div>
      <div className="formSection">
        <div className="formSt">
          <div className={formStatus ? "formFailure" : "formSuccess"}>
            <div className="formfields">
              <form className="formDiv" onSubmit={handleSubmit(onSubmit)}>
                <div className="fields">
                  <label>Name</label>
                  <input
                    placeholder="Enter Your Name"
                    type="text"
                    id="formname"
                    {...register("name")}
                  />
                  <div className={errors.name ? "errorDisplay" : ""}>
                    {errors.name?.message}
                  </div>
                </div>
                <br />
                <div className="fields">
                  <label>Mobile Number</label>
                  <input
                    placeholder="Enter Your Mobile Number"
                    type="text"
                    id="formmobile"
                    maxLength={10}
                    {...register("mobileNumber")}
                  />
                  <div className={errors.mobileNumber ? "errorDisplay" : ""}>
                    {errors.mobileNumber?.message}
                  </div>
                </div>
                <br />
                <div className="fields">
                  <label>Message/Concern</label>
                  <textarea
                    name="description"
                    rows="5"
                    cols="30"
                    maxLength="300"
                    placeholder="Enter your concern"
                    {...register("comment")}
                  />
                  <div className={errors.comment ? "errorDisplay" : ""}>
                    {errors.comment?.message}
                  </div>
                </div>
                <br />
                <div className="subBtn">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className={formStatus ? "formSuccess" : "formFailure"}>
            <div className="successMessage">
              <div className="messageCont">
                <svg className="successSvg" viewBox="0 0 24 24">
                  <path
                    fill="white"
                    d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"
                  ></path>
                </svg>
                <br />
                <br />
                <br />

                <div className="messageLine">
                  <h4 className="submitLineOne">
                    Thank you for connecting with me !!
                  </h4>
                  <br />
                  <h2 className="submitLineTwo">
                    I will get in touch with you shortly
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpSection;
