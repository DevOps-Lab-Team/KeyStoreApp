import React from "react";
import { Form, Input, Select, InputNumber, Button, Space } from "antd";

import type { GameFormProps } from "./form.type.ts";

const { Option } = Select;

const genreOptions = [
  "Action",
  "Adventure",
  "RPG",
  "Strategy",
  "Simulation",
  "Sports",
  "Racing",
  "Fighting",
  "Platformer",
  "Puzzle",
  "Horror",
  "Survival",
  "MMO",
  "MOBA",
  "Battle Royale",
  "Card Game",
  "Educational",
  "Music",
  "Party",
  "Sandbox"
];

export const GameForm: React.FC<GameFormProps> = ({ form, onSubmit, isEdit = false }) => {
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onSubmit}
    >
      <Form.Item
        label="Название"
        name="name"
        rules={[{ required: true, message: "Пожалуйста, введите название игры" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="URL изображения"
        name="img"
        rules={[{ required: true, message: "Пожалуйста, укажите URL изображения" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Цена"
        name="price"
        rules={[{ required: true, message: "Пожалуйста, укажите цену" }]}
      >
        <InputNumber min={0} step={0.01} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Жанр"
        name="genre"
        rules={[{ required: true, message: "Пожалуйста, выберите жанр" }]}
      >
        <Select placeholder="Выберите жанр">
          {genreOptions.map(genre => (
            <Option key={genre} value={genre}>{genre}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            {isEdit ? "Сохранить изменения" : "Создать игру"}
          </Button>
          <Button htmlType="button" onClick={() => window.history.back()}>
            Отмена
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default GameForm;
