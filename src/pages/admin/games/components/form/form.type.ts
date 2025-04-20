import type { FormInstance } from "antd";
import type { TGame } from "@/shared/types";

export type GameFormData = TGame;

export interface GameFormProps {
  // values: Partial<GameFormData>;
  form: FormInstance<GameFormData>
  onSubmit: (data: GameFormData) => void;
  isEdit?: boolean;
}
