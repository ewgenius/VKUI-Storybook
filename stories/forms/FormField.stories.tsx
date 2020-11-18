import * as React from 'react';
import {
  Input,
  FormLayout,
  FormItem,
  ChipsInput,
  Avatar,
  Chip,
  NativeSelect,
  Textarea,
  Select,
  SizeType,
} from '@vkontakte/vkui';

export default {
  title: 'Forms/FormField',
  component: Input,
};

export function Default() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <FormLayout onSubmit={onSubmit}>
      <FormItem top="Input">
        <Input name="email" type="email" />
      </FormItem>

      <FormItem top="Input compact">
        <Input name="password" sizeY={SizeType.COMPACT} type="password" />
      </FormItem>

      <FormItem top="TextArea">
        <Textarea name="address" placeholder="address" />
      </FormItem>

      <FormItem top="TextArea compact">
        <Textarea
          name="address"
          placeholder="address"
          sizeY={SizeType.COMPACT}
        />
      </FormItem>

      <FormItem top="ChipsInput">
        <ChipsInput
          name="email"
          type="email"
          readOnly
          value={[
            { value: '1', label: 'Arctic Monkeys', src: '' },
            { value: '2', label: 'Звери', src: '' },
            { value: '4', label: 'FACE', src: '' },
            { value: '3', label: 'Depeche Mode', src: '' },
            { value: '5', label: 'Linkin Park', src: '' },
          ]}
          renderChip={({ value, label, option: { src }, ...rest }) => (
            <Chip
              value={value}
              removable={false}
              before={<Avatar size={24} src={src} />}
              {...rest}
            >
              {label}
            </Chip>
          )}
        />
      </FormItem>

      <FormItem top="NativeSelect">
        <NativeSelect name="address">
          <option value="Testing City">Testing City</option>
          <option value="Test City">Test City</option>
        </NativeSelect>
      </FormItem>

      <FormItem top="Select">
        <Select placeholder="country" autoComplete="address" name="country">
          <option value="Россия">Россия</option>
          <option value="США">США</option>
        </Select>
      </FormItem>

      <FormItem top="Select compact">
        <Select
          placeholder="country"
          sizeY={SizeType.COMPACT}
          autoComplete="address"
          name="country"
        >
          <option value="Россия">Россия</option>
          <option value="США">США</option>
        </Select>
      </FormItem>
    </FormLayout>
  );
}
