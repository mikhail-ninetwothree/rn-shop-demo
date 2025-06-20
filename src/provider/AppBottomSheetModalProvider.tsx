import React, { useCallback, useState, createContext, useRef, ReactNode } from 'react';
import BaseBottomSheetModal from '@components/bottom_sheet/BaseBottomSheetModal';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { IBottomSheetModal } from '@provider/interfaces/IBottomSheetModal';

type ModalContextType = {
    onOpenBSModal: (modal: IBottomSheetModal) => void;
    onCloseBSModal: () => void;
} | null;

export const AppBottomSheetModalContext = createContext<ModalContextType>(null);

export default ({ children }: { children: ReactNode }) => {
    const [modal, setModal] = useState<IBottomSheetModal>();
    const modalRef = useRef<BottomSheetModal>(null);

    const onOpenBSModal = useCallback((newModal: IBottomSheetModal) => {
        setModal(newModal);
        setTimeout(() => {
            // present the modal AFTER rendering
            modalRef.current?.present();
        });
    }, []);

    const onCloseBSModal = useCallback(() => {
        modalRef.current?.close();
        setModal(undefined);
    }, []);

    return (
        <AppBottomSheetModalContext.Provider value={{ onOpenBSModal, onCloseBSModal }}>
            <>{children}</>
            <BaseBottomSheetModal
                ref={modalRef}
                onDismiss={onCloseBSModal}
                {...modal?.config}
            >
                {modal?.body}
            </BaseBottomSheetModal>
        </AppBottomSheetModalContext.Provider>
    );
};
