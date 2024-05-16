import React, { useState } from 'react';
import { Card, Row, Col, Input, Upload, Button } from 'antd';
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';

const { Meta } = Card;

const Students = () => {
  const [editMode, setEditMode] = useState(false);
  const [cardData, setCardData] = useState([
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      image: 'https://via.placeholder.com/150',
    },
  ]);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  const handleInputChange = (index, key, value) => {
    const updatedData = [...cardData];
    updatedData[index][key] = value;
    setCardData(updatedData);
  };

  return (
    <>
    <Navbar/>
    <div style={{ padding: '20px' }}>
      <Button
        type="primary"
        icon={editMode ? <CheckOutlined /> : <EditOutlined />}
        onClick={editMode ? handleSaveClick : handleEditClick}
        style={{ marginBottom: '20px' }}
      >
        {editMode ? 'Save' : 'Edit'}
      </Button>
      <Row gutter={[16, 16]}>
        {cardData.map((card, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={<img alt={card.title} src={card.image} />}
            >
              {editMode ? (
                <>
                  <Input
                    placeholder="Title"
                    value={card.title}
                    onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                  />
                  <Input.TextArea
                    placeholder="Description"
                    value={card.description}
                    onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                  />
                  <Upload
                    name="image"
                    showUploadList={false}
                    beforeUpload={() => false}
                    onChange={(info) => {
                      if (info.file.status === 'done') {
                        const imageUrl = URL.createObjectURL(info.file.originFileObj);
                        handleInputChange(index, 'image', imageUrl);
                      }
                    }}
                  >
                    <Button>Upload Image</Button>
                  </Upload>
                </>
              ) : (
                <Meta title={card.title} description={card.description} />
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </>
    
  );
};

export default Students