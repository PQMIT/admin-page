import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, Radio, Rate, Select, Slider, Switch, TreeSelect, Upload } from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const Settings = () => {
  const [form] = Form.useForm();
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [textColor, setTextColor] = useState("#000000"); //Khởi tọa màu mặc định
  const [text, setText] = useState("");
  const [hide, sethide] = useState(true);
  // console.log(textColor);

  const onFinish = (values) => {
    console.log("Received values:", values);
    sethide(!hide);
  };
  // console.log("textColor", textColor);
  const onColorChange = (color) => {
    if (color.metaColor) {
      const { r, g, b, a } = color.metaColor; // Lấy giá trị color từ metaColor
      const rgbaColor = `rgba(${r}, ${g}, ${b}, ${a})`;
      setTextColor(rgbaColor); // Cập nhật màu chữ
      sethide(false);
    }
  };
  // useEffect(() => {}), [textColor];
  return (
    <div>
      <h1>Settings</h1>
      <Form
        form={form}
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 5,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        onChange={() => {
          sethide(false);
        }}
      >
        <Form.Item label="Title" name="title" rules={[{ required: true, message: "Please input your title!" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="ActiveDate" name="activeDate" rules={[{ required: true, message: "Please select a date range!" }]}>
          <RangePicker
            onChange={(e) => {
              sethide(false);
            }}
          />
        </Form.Item>
        <Form.Item label="textColor" name="textColor" rules={[{ required: true, message: "Please input your text!" }]}>
          <Input
            style={{ color: textColor }} // Đặt màu chữ cho ô nhập
            value="hello"
          />
        </Form.Item>

        <Form.Item label="BackgroundColor" name="backgroundColor" rules={[{ required: true, message: "Please select a color!" }]}>
          <ColorPicker onChange={onColorChange} />
        </Form.Item>
        {!hide && (
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
};

export default Settings;
