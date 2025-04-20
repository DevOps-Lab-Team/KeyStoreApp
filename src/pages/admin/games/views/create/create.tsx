import { useNavigate } from "react-router-dom";
import { Form as AntdForm } from "antd";
import Title from "antd/es/typography/Title";

import { gamesStore } from "@/pages/admin/games/store";
import { Form } from "@/pages/admin/games/components/form";

import type { TGame } from "@/shared/types.ts";

const useForm = AntdForm.useForm;

const GameCreatePage = () => {
  const navigate = useNavigate();
  const [form] = useForm<TGame>();

  const handleSubmit = (data: TGame) => {
    gamesStore.createGame(data).then(() => {
      navigate("/admin/games");
    });
  };

  return (
    <>
      <Title>Добавить игру</Title>
      <Form
        form={form}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default GameCreatePage;
