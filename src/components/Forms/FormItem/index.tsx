import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

interface FormItemProps {
  formControlId: string;
  inputType: string;
  formLabel: string;
  handleOnChange: (e: any) => void;
  value: string;
}

export const FormItem: React.FC<FormItemProps> = ({
  formControlId,
  formLabel,
  inputType,
  handleOnChange,
  value,
}) => {
  return (
    <FormControl id={formControlId} isRequired>
      <FormLabel>{formLabel}</FormLabel>
      <Input
        name={formControlId}
        value={value}
        type={inputType}
        onChange={handleOnChange}
      />
    </FormControl>
  );
};
