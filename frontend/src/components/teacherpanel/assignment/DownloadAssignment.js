import React from "react";
import InnerHeader from "../../common/InnerHeader";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import SelectInputField from "../../common/InputField/SelectInputField";
import AssignmentTableData from "./AssignmentTableData";

function DownloadAssignment() {
  const selectChange = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <InnerHeader icon={<MdIcons.MdUploadFile />} name={"View Assignments"} />
      <div className="main-content">
        <div className="card-section">
          <div className="heading">
            <span className="title-icon">
              <FaIcons.FaReact />
            </span>
            <span className="title">Select Class</span>
          </div>
          <div className="content-section">
            <div className="custom-modal-input">
              <SelectInputField
                onChange={selectChange}
                title={"Select Class"}
                icon={<FaIcons.FaBook className="mid-icon" />}
                name={"selectClass"}
                options={[
                  { label: "12", value: "12" },
                  { label: "11", value: "11" },
                ]}
                // hasValue={true}
                // value={{ label: "11", value: "11" }}
              />

              <SelectInputField
                onChange={selectChange}
                title={"Select Section"}
                icon={<FaIcons.FaCode className="mid-icon" />}
                name={"selectSection"}
                options={[
                  { label: "A", value: "A" },
                  { label: "B", value: "B" },
                ]}
              />

              <SelectInputField
                onChange={selectChange}
                title={"Select Subject"}
                icon={<FaIcons.FaChalkboard className="mid-icon" />}
                name={"selectSubjects"}
                options={[
                  { label: "Social", value: "Social" },
                  { label: "Science", value: "Science" },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="card-section">
          <div className="heading">
            <span className="title-icon">
              <FaIcons.FaChalkboardTeacher />
            </span>
            <span className="title">View Assignments</span>
          </div>
          <div className="content-section">
            <AssignmentTableData />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default DownloadAssignment;