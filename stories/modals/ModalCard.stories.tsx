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
} from '@vkontakte/vkui';

export default {
  title: 'Modals/ModalCard',
  component: ModalCard,
};

export function Default() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const openCardModal = () => setActiveModal('modalCard1');
  const openPageModal = () => setActiveModal('modalPage1');
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
              header="Отправляйте деньги друзьям, используя банковскую карту"
              subheader="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
            />
            <ModalPage
              id="modalPage1"
              dynamicContentHeight
              onClose={closeModal}
              header={<ModalPageHeader>test page</ModalPageHeader>}
            >
              <Group>test</Group>
            </ModalPage>
          </ModalRoot>
        }
      >
        <Panel id="panel1">
          <Div>
            <Button stretched onClick={openCardModal}>
              Open modal card 1
            </Button>
          </Div>
          <Div>
            <Button stretched onClick={openPageModal}>
              Open modal page 1
            </Button>
          </Div>
        </Panel>
      </View>
    </AdaptivityProvider>
  );
}