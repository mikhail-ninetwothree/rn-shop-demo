import { BottomSheetModalProps } from '@gorhom/bottom-sheet';

export interface IBottomSheetModal {
  body: React.ReactNode;
  config?: Partial<Omit<BottomSheetModalProps, 'children'>>;
}
