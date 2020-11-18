import * as React from 'react';
import { useState } from 'react';
import {
  View,
  Div,
  ModalRoot,
  ModalCard,
  ModalPage,
  ModalPageHeader,
  Panel,
  Button,
  Group,
  AdaptivityProvider,
  Textarea,
  usePlatform,
  Platform,
  PanelHeaderButton,
  SelectMimicry,
  FormItem,
  Radio,
  Input,
  DatePicker,
  CellButton,
} from '@vkontakte/vkui';
import {
  Icon24Cancel,
  Icon24Done,
  Icon56MoneyTransferOutline,
} from '@vkontakte/icons';
import { Checkbox } from '@vkontakte/vkui/dist/components/Checkbox/Checkbox';

export default {
  title: 'Modals/ModalCard',
  component: ModalCard,
};

export function Default() {
  const platform = usePlatform();
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const openCardModal1 = () => setActiveModal('modalCard1');
  const openCardModal2 = () => setActiveModal('modalCard2');
  const openPageModal1 = () => setActiveModal('modalPage1');
  const openPageModal2 = () => setActiveModal('modalPage2');
  const closeModal = () => setActiveModal(null);
  return (
    <AdaptivityProvider>
      <View
        activePanel="panel1"
        modal={
          <ModalRoot activeModal={activeModal} onClose={closeModal}>
            <ModalCard
              id="modalCard1"
              onClose={closeModal}
              icon={<Icon56MoneyTransferOutline />}
              header="Отправляйте деньги друзьям, используя банковскую карту"
              subheader="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
              actions={
                <Button size="l" mode="primary" onClick={openCardModal2}>
                  Попробовать
                </Button>
              }
            />

            <ModalCard
              id="modalCard2"
              onClose={closeModal}
              header="Расскажите о себе"
              actions={
                <Button size="l" mode="primary" onClick={closeModal}>
                  Сохранить
                </Button>
              }
            >
              <Textarea defaultValue="В Грузии" />
            </ModalCard>

            <ModalPage
              id="modalPage1"
              onClose={closeModal}
              header={
                <ModalPageHeader
                  right={
                    <PanelHeaderButton onClick={closeModal}>
                      {platform === Platform.IOS ? 'Готово' : <Icon24Done />}
                    </PanelHeaderButton>
                  }
                >
                  Фильтры
                </ModalPageHeader>
              }
            >
              <Group>
                <FormItem>
                  <CellButton>Выбор страны</CellButton>
                  <CellButton>Просмотры истории</CellButton>
                  <CellButton>Информация о пользователе</CellButton>
                </FormItem>

                <FormItem top="Страна">
                  <SelectMimicry placeholder="Выбрать страну" />
                </FormItem>
                <FormItem top="Город">
                  <SelectMimicry placeholder="Выбрать город" disabled />
                </FormItem>

                <FormItem top="Пол">
                  <Radio name="sex" value={0} defaultChecked>
                    Любой
                  </Radio>
                  <Radio name="sex" value={1}>
                    Мужской
                  </Radio>
                  <Radio name="sex" value={2}>
                    Женский
                  </Radio>
                </FormItem>

                <FormItem top="Пол">
                  <Radio name="sex" value={0} defaultChecked>
                    Любой
                  </Radio>
                  <Radio name="sex" value={1}>
                    Мужской
                  </Radio>
                  <Radio name="sex" value={2}>
                    Женский
                  </Radio>
                </FormItem>

                <FormItem top="Школа">
                  <SelectMimicry placeholder="Выбрать школу" disabled />
                </FormItem>
                <FormItem top="Университет">
                  <SelectMimicry placeholder="Выбрать университет" disabled />
                </FormItem>

                <FormItem top="Дополнительно">
                  <Checkbox>С фотографией</Checkbox>
                  <Checkbox>Сейчас на сайте</Checkbox>
                </FormItem>

                <FormItem top="Работа">
                  <Input placeholder="Место работы" />
                </FormItem>
                <FormItem>
                  <Input placeholder="Должность" />
                </FormItem>

                <FormItem top="Дата рождения">
                  <DatePicker
                    min={{ day: 1, month: 1, year: 1901 }}
                    max={{ day: 1, month: 1, year: 2006 }}
                    dayPlaceholder="Д"
                    monthPlaceholder="ММ"
                    yearPlaceholder="ГГ"
                  />
                </FormItem>
              </Group>
            </ModalPage>

            <ModalPage
              id="modalPage2"
              onClose={closeModal}
              header={
                <ModalPageHeader
                  right={
                    <PanelHeaderButton onClick={closeModal}>
                      {platform === Platform.IOS ? 'Готово' : <Icon24Done />}
                    </PanelHeaderButton>
                  }
                >
                  Фильтры
                </ModalPageHeader>
              }
            >
              <Group>
                <FormItem top="Дата рождения">
                  <DatePicker
                    min={{ day: 1, month: 1, year: 1901 }}
                    max={{ day: 1, month: 1, year: 2006 }}
                    dayPlaceholder="Д"
                    monthPlaceholder="ММ"
                    yearPlaceholder="ГГ"
                  />
                </FormItem>
              </Group>
            </ModalPage>
          </ModalRoot>
        }
      >
        <Panel id="panel1">
          <Div>
            <Button stretched onClick={openCardModal1}>
              Open modal card 1
            </Button>
          </Div>
          <Div>
            <Button stretched onClick={openPageModal1}>
              Open modal page 1
            </Button>
          </Div>
          <Div>
            <Button stretched onClick={openPageModal2}>
              Open modal page 2
            </Button>
          </Div>
        </Panel>
      </View>
    </AdaptivityProvider>
  );
}
