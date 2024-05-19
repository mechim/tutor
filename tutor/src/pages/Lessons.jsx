import React, { useContext, useEffect, useState } from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Form, Input, Button, DatePicker, TimePicker, List, Dropdown, Space, Select, Typography  } from 'antd';
import Navbar from '../components/Navbar';
import { Context } from '../App';
import '../App.css'

const {Title, Text} = Typography;

function Lessons() {
  const {lessons, setLessons, students, theme} = useContext(Context);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let newTotal = 0;
    lessons.forEach(lesson => {
      const student = students.find(student => student.name === lesson.student);
      if (student) {
        newTotal += student.price;
      }
    });
    setTotal(newTotal);
  }, [lessons])

  const addLesson = (lesson) => {
    setLessons([...lessons, lesson]);
  };

  const deleteLesson = (index) => {
    const updatedLessons = [...lessons];
    updatedLessons.splice(index, 1);
    setLessons(updatedLessons);
  };

  return (
    <>
      <Navbar/>
      <div style={{ padding: '20px' }}>
        <Title 
          style={theme === 'dark' ? {color: '#fff'} : {}}
        >Tutor Lesson Scheduler</Title>
        <Title style={theme === 'dark' ? {color: '#fff'} : {}} level={4}>Total money: ${total}</Title>
        <LessonForm addLesson={addLesson} students={students} theme={theme} />
        <LessonList lessons={lessons} deleteLesson={deleteLesson} />
      </div>
    </>
    
  );
}

function LessonForm({ addLesson, students, theme }) {
  const [form] = Form.useForm();
  const studentOptions = students.map(student => ({
    label: student.name,
    value: student.name,
  }));

  function findPrice(studentName){
    const student = students.find(element => element.name === studentName);
    return student ? student.price : 0;
  }
  const handleSubmit = (values) => {
    values.price = findPrice(values.student);
    addLesson(values);
    form.resetFields();
  };

  
  return (
    <Form form={form} onFinish={handleSubmit} layout="inline">
      <Form.Item name="student" rules={[{required: true, message: 'Please select a student!'}]}
        
      >
      <Select 
      // style={theme === 'dark' ? {backgroundColor: '#1f1f1f', color: '#fff'}: {}}
        placeholder="Student" 
        options={studentOptions} 
        // style={{width:200}}
      />

      </Form.Item>
      <Form.Item name="subject" rules={[{ required: true, message: 'Please input the subject!' }]}>
        <Input placeholder="Subject" />
      </Form.Item>
      <Form.Item name="date" rules={[{ required: true, message: 'Please input the date!' }]}>
        <DatePicker showTime placeholder="Select Date" />
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
            title={lesson.student+ " $" + lesson.price}
            description={lesson.date.toString()}
            style={{color:'#fff'}}
          />
          <Button danger onClick={() => deleteLesson(index)}>Delete</Button>
        </List.Item>
      )}
    />
  );
}

export default Lessons;
