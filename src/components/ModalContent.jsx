import React, { useEffect } from 'react';
import 'antd/lib/modal/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/select/style/css';
import { Modal, Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

const ModalContent = props => {
    const [form] = Form.useForm();
    const { isModalVisible, handleCancel, onSubmitContent, onDeleteContent, titleModal, formValues } = props;

    const onCancel = () => {
        form.resetFields();
        handleCancel();
    };
    
    useEffect(() => {
        form.setFieldsValue({
            id: formValues.id || '',
            title: formValues.title,
            description: formValues.description,
            status: formValues.status,
          });
      }, [form, formValues]);

    const onSubmit = () => {
        form.validateFields().then(values => {
            onSubmitContent(values);
            onCancel();
        })
        .catch(error => {

        })
    };

    const onDelete = () => {
        onDeleteContent(formValues);
        onCancel();
    };

    return (
      <>
        <Form
            {...layout}
            name="formTodo"
            form={form}
            onFinish={onSubmit}
        >
            <Modal 
                title={`${titleModal} To do`} 
                visible={isModalVisible}
                onCancel={onCancel}
                footer={[
                    <div className="d-flex justify-content-end">
                        {formValues.status !== 1 && titleModal !== 'Create' && (
                            <Button className="mr-3" type="danger" onClick={onDelete}>
                                Delete
                            </Button>
                        )},
                        <Form.Item>
                            <Button type="primary" htmlType="submit" onClick={onSubmit}>
                                Submit
                            </Button>
                        </Form.Item>
                    </div>
                ]}
            >
                <Form.Item
                    label="Id"
                    name="id"
                    style={{ display: 'none' }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input the Title!' }]}
                >
                    <Input />
                </Form.Item>
                <br />
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input the Description!' }]}
                >
                    <Input />
                </Form.Item>
                <br />
                <Form.Item
                    label="Status"
                    name="status"
                    rules={[{ required: true, message: 'Please input the Status!' }]}
                >
                    <Select placeholder="Select a option" style={{ width: '100%' }}>
                        <Option value={1}>Done</Option>
                        <Option value={0}>Unfinished</Option>
                    </Select>
                </Form.Item>
            </Modal>
        </Form>
      </>
    );
  };

export default ModalContent;