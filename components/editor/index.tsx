import React, { useCallback, useContext } from "react";
import { Tabs } from "antd";
import { debounce } from "lodash";
import { FormCreator, FormListCreator } from "./FormCreator";
import { ResumeContext } from "../../context/resumeContext";
import { config } from "./config";

export default function Editor() {
  const { state, dispatch } = useContext(ResumeContext);

  const handleSave = useCallback(
    debounce((value: any) => {
      dispatch({
        type: "save",
        payload: value,
      });
    }, 1000),
    []
  );

  const handleChange = (value: any, immediately?: boolean) => {
    if (immediately) {
      dispatch({
        type: "save",
        payload: value,
      });
    } else {
      handleSave(value);
    }
  };

  const tabList = [
    {
      key: "1",
      id: "avatar",
      label: "头像设置",
      children: (
        <FormCreator
          config={config.avatar}
          name="avatar"
          value={state.avatar}
          onChange={handleChange}
        />
      ),
    },
    {
      key: "2",
      name: "profile",
      label: "基本信息",
      children: (
        <FormCreator
          config={config.profile}
          name="profile"
          value={state.profile}
          onChange={handleChange}
        />
      ),
    },
    {
      key: "3",
      name: "educationList",
      label: "教育背景",
      children: (
        <FormListCreator
          name="educationList"
          config={config.educationList}
          value={state}
          onChange={handleChange}
        />
      ),
    },
    {
      key: "4",
      name: "skillList",
      label: "专业技能",
      children: (
        <FormListCreator
          name="skillList"
          config={config.skillList}
          value={state}
          onChange={handleChange}
        />
      ),
    },
    {
      key: "5",
      name: "awardList",
      label: "更多信息",
      children: (
        <FormListCreator
          name="awardList"
          config={config.awardList}
          value={state}
          onChange={handleChange}
        />
      ),
    },
    {
      key: "6",
      name: "workExpList",
      label: "工作经历",
      children: (
        <FormListCreator
          name="workExpList"
          config={config.workExpList}
          value={state}
          onChange={handleChange}
        />
      ),
    },
    {
      key: "7",
      name: "projectList",
      label: "项目经历",
      children: (
        <FormListCreator
          name="projectList"
          config={config.projectList}
          value={state}
          onChange={handleChange}
        />
      ),
    },
  ];

  return (
    <div>
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        type="line"
        items={tabList}
      />
    </div>
  );
}
