import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, List } from 'antd';
// import 'antd/dist/antd.css';

function Lessons() {
  const [lessons, setLessons] = useState([]);

  const addLesson = (lesson) => {
    setLessons([...lessons, lesson]);
  };

  const deleteLesson = (index) => {
    const updatedLessons = [...lessons];
    updatedLessons.splice(index, 1);
    setLessons(updatedLessons);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tutor Lesson Scheduler</h1>
      <LessonForm addLesson={addLesson} />
      <LessonList lessons={lessons} deleteLesson={deleteLesson} />
    </div>
  );
}

function LessonForm({ addLesson }) {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    addLesson(values);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="inline">
      <Form.Item name="subject" rules={[{ required: true, message: 'Please input the subject!' }]}>
        <Input placeholder="Subject" />
      </Form.Item>
      <Form.Item name="date" rules={[{ required: true, message: 'Please select the date!' }]}>
        <DatePicker placeholder="Select Date" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Lesson
        </Button>
      </Form.Item>
    </Form>
  );
}

function LessonList({ lessons, deleteLesson }) {
  return (
    <List
      dataSource={lessons}
      renderItem={(lesson, index) => (
        <List.Item>
          <List.Item.Meta
            title={lesson.subject}
            description={lesson.date.toString()}
          />
          <Button onClick={() => deleteLesson(index)}>Delete</Button>
        </List.Item>
      )}
    />
  );
}

export default Lessons;
