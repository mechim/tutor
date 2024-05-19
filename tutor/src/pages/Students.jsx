import React, { useContext, useState } from 'react';
import { Card, Row, Col, Input, Upload, Button, Form, InputNumber, List } from 'antd';
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';
import { Context } from '../App';

const { Meta } = Card;

const Students = () => {
  const {students, setStudents} = useContext(Context);
  const addStudent = (student) => {
    setStudents([...students, student]);
  }
  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };
  
  return (
    <>
    <Navbar/>
    <div style={{ padding: '20px' }}>
      <StudentForm addStudent={addStudent}/>
      <div style={{height: '20px'}}></div>
      <StudentList students={students} deleteStudent={deleteStudent}/>
    </div>
    </>
    
  );
};


function StudentForm({ addStudent }) {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    addStudent(values);
    form.resetFields();
  };

  return(
    <Form form={form} onFinish={handleSubmit} layout='inline'>
      <Form.Item name="name" rules={[{required: true, message: 'Please input the students name!'}]}>
        <Input placeholder='Name'/>
      </Form.Item>
      <Form.Item name="price" rules={[{required: true, message: 'Please input the price!'}]}>
        <InputNumber placeholder='Price'/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Student
        </Button>
      </Form.Item>
    </Form>
  )
  
}

function StudentList({students, deleteStudent}){
  return(
      <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={students}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.name} extra={<Button  danger onClick={(item) => deleteStudent(item)}>Delete</Button>}>Price per lesson: {item.price}</Card>
        </List.Item>
      )}
    />
  )
}

export default Students