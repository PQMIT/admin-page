import { Button, Space, Table, Modal } from "antd";
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { FormOutlined } from "@ant-design/icons";
const { TextArea } = Input;

const PostsManagement = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null); // Khởi tạo state để lưu dữ liệu dòng đã chọn
  const showModal = (record) => {
    setIsModalOpen(true);
    setSelectedRowData(record); // Lưu dữ liệu dòng vào state
    // Mở modal hoặc thực hiện hành động khác ở đây
    console.log("Selected Row Data:", record);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
        // console.log(data[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Đảm bảo rằng tất cả các hook được gọi trước khi kiểm tra điều kiện
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  /* const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "id",
    });
  }; */
  const uniqueUserId = Array.from(new Set(posts.map((e) => e.userId))); // Lọc ra các userId không trùng nhau
  const uniqueTitle = Array.from(new Set(posts.map((e) => e.title))); // Lọc ra các title không trùng nhau
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      filters: [],
      filteredValue: filteredInfo.id || null,
      // onFilter: (value, record) => record.id.includes(value),
      // sorter: (a, b) => a.id.length - b.id.length,
      // sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "userId",
      dataIndex: "userId",
      key: "userId",
      filters: uniqueUserId.map((userId) => ({
        text: userId,
        value: userId,
      })),
      filteredValue: filteredInfo.userId || null,
      onFilter: (value, record) => record.userId === value, // So sánh userId của record với value
      sorter: (a, b) => a.userId - b.userId,
      sortOrder: sortedInfo.columnKey === "userId" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
      filters: uniqueTitle.map((title) => ({
        text: title,
        value: title,
      })),
      filteredValue: filteredInfo.title || null,
      onFilter: (value, record) => (record.title = value), //so sánh title của record với value
      sorter: (a, b) => a.title.length - b.title.length,
      sortOrder: sortedInfo.columnKey === "title  " ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <FormOutlined onClick={() => showModal(record)} />
        </Space>
      ),
    },
  ];
  return (
    <>
      <div>
        <h1>PostsManagement</h1>
      </div>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        {/* <Button onClick={setAgeSort}>Sort age</Button> */}
        <Button onClick={clearFilters}>Clear filters</Button>
        {/* <Button onClick={clearAll}>Clear filters and sorters</Button> */}
      </Space>
      <Table
        pagination={{
          position: ["topRight"],
        }}
        columns={columns}
        dataSource={posts}
        onChange={handleChange}
      />
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div>
          userId:
          <Input value={selectedRowData?.userId} />
        </div>
        <div>
          title:
          <TextArea rows={2} value={selectedRowData?.title} />
        </div>
        <div>
          body:
          <TextArea rows={4} value={selectedRowData?.body} />
        </div>
      </Modal>
    </>
  );
};

export default PostsManagement;
