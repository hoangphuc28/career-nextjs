import { Fragment, useEffect, useState } from "react";
import { likelyOptions, unlikelyOptions } from "../const/data";
interface SelectedOptions {
  [key: string]: boolean;
}
export default function Review() {
  const [isVisibleReview, setIsVisibleReview] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);
  const [appearCount, setAppearCount] = useState(0);
  const [checkType, setCheckType] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
  const [submitted, setSubmitted] = useState(false);

  const handleScrollReview = () => {
    console.log(appearCount);
    if (window.scrollY > 300 && appearCount === 0) {
      setIsDisplay(true);
      setAppearCount(appearCount + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollReview);
    return () => window.removeEventListener("scroll", handleScrollReview);
  }, [appearCount]);

  useEffect(() => {
    if (isDisplay) {
      setIsVisibleReview(true);
    }
  }, [isDisplay]);

  const closeLikelyModal = () => {
    setIsVisibleReview(false);
  };

  const handleTransitionEnd = () => {
    if (!isVisibleReview) {
      setIsDisplay(false);
    }
  };
  const handleRadioChange = (event: any) => {
    setSelectedOptions({});
    setCheckType(event.target.value);
  };

  const submitLikelyModal = () => {
    // Handle submit action
    setSubmitted(true);
  };
  const handleCheckboxChange = (event: any) => {
    const { value } = event.target;
    setSelectedOptions((prevSelected) => ({
      ...prevSelected,
      [value]: !prevSelected[value], // Toggle the checkbox state
    }));
  };

  return (
    <Fragment>
      <div
        style={{
          borderStyle: isDisplay ? "solid" : "none",
        }}
        className={`likely-modal ${isVisibleReview ? "visible" : ""}`}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="title">
          <i className="bx bx-info-circle" />
          <h4>Careers</h4>
        </div>
        <span className="close" onClick={closeLikelyModal}>
          <i className="bx bx-x" />
        </span>
        {submitted ? (
          <p className="thank-you">Thank you for your feedback.</p>
        ) : (
          <Fragment>
            <div className="questions">
              <label>
                1. How likely or unlikely are you to apply for a role at Meta?
              </label>
              <div className="first likelyun">
                <label className="checkbox">
                  <input
                    type="radio"
                    defaultValue="unlikely"
                    name="radio"
                    onChange={handleRadioChange}
                  />
                  <span className="checkmark" />
                  <span className="text">Very unlikely</span>
                </label>
                <label className="checkbox">
                  <input
                    type="radio"
                    defaultValue="unlikely"
                    name="radio"
                    onChange={handleRadioChange}
                  />
                  <span className="checkmark" />
                  <span className="text">Unlikely</span>
                </label>
                <label className="checkbox">
                  <input
                    type="radio"
                    defaultValue="unlikely"
                    name="radio"
                    onChange={handleRadioChange}
                  />
                  <span className="checkmark" />
                  <span className="text">Neither likely nor unlikely</span>
                </label>
                <label className="checkbox">
                  <input
                    type="radio"
                    defaultValue="likely"
                    name="radio"
                    onChange={handleRadioChange}
                  />
                  <span className="checkmark" />
                  <span className="text">Likely</span>
                </label>
                <label className="checkbox">
                  <input
                    type="radio"
                    defaultValue="likely"
                    name="radio"
                    onChange={handleRadioChange}
                  />
                  <span className="checkmark" />
                  <span className="text">Very likely</span>
                </label>
                <label className="checkbox">
                  <input
                    type="radio"
                    defaultValue="likely"
                    name="radio"
                    onChange={handleRadioChange}
                  />
                  <span className="checkmark" />
                  <span className="text">I’ve already applied</span>
                </label>
              </div>
            </div>
            {checkType === "unlikely" ? (
              <div className="questions" id="unlikely">
                <label>
                  2. What contributed to your answer? Please select all that
                  apply.
                </label>
                <div className="first second">
                  {unlikelyOptions.map((item, index) => (
                    <label
                      key={index}
                      className={`radiobox ${
                        selectedOptions[item.value] ? "active" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        value={item.value}
                        checked={!!selectedOptions[item.value]}
                        onChange={handleCheckboxChange}
                      />
                      <span className="checkmark" />
                      <span className="text">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ) : checkType === "likely" ? (
              likelyOptions.map((item) => (
                <label
                  key={item.value}
                  className={`radiobox ${
                    selectedOptions[item.value] ? "active" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    value={item.value}
                    checked={!!selectedOptions[item.value]}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkmark" />
                  <span className="text">{item.label}</span>
                </label>
              ))
            ) : (
              <Fragment></Fragment>
            )}

            <div className="actions">
              <button type="button" onClick={closeLikelyModal}>
                Cancel
              </button>
              <button type="button" onClick={submitLikelyModal}>
                Submit
              </button>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}
