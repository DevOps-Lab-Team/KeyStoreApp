import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Form as AntdForm } from "antd";
import Title from "antd/es/typography/Title";

import { gamesStore } from "../../store";
import { Form } from "../../components/form";

import type { TGame } from "@/shared/types";

const useForm = AntdForm.useForm;

const GameUpdatePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [form] = useForm<TGame>();

  useEffect(() => {
    if (params.id) {
      gamesStore.fetchGameById(params.id).then(game => {
        if(game) form.setFieldsValue(game);
      });
    }
  }, [params]);

  const handleSubmit = (data: TGame) => {
    if (!params.id) {
      return;
    }
    gamesStore.updateGame(params.id, data).then(() => {
      navigate("/admin/games");
    });
  };

  return (
    <>
      <Title>Редактировать игру</Title>
      <Form
        form={form}
        onSubmit={handleSubmit}
        isEdit
      />
    </>
  );
};

export default observer(GameUpdatePage);
