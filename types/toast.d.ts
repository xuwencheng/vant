import Vue from 'vue';
import { VanPopupMixin } from './mixins/popup';

type ToastMessage = string | number;

export type ToastOptions = {
  type?: string;
  mask?: boolean;
  position?: string;
  duration?: number;
  className?: any;
  onClose?(): void;
  forbidClick?: boolean;
  loadingType?: string;
  message?: ToastMessage;
}

export interface VanToast extends Vue, VanPopupMixin {
  type: string;
  position: string;
  loadingType: string;
  forbidClick: boolean;
  message: ToastMessage;
  clear(): void;
}

export interface IToast {
  (message: ToastOptions | ToastMessage, options?: ToastOptions): VanToast;
  loading(options?: ToastOptions | ToastMessage): VanToast;
  success(options?: ToastOptions | ToastMessage): VanToast;
  fail(options?: ToastOptions | ToastMessage): VanToast;
  clear(): void;
  install(): void;
  setDefaultOptions(options: ToastOptions): void;
  resetDefaultOptions(): void;
  allowMultiple(allow: boolean): void
}

declare module 'vue/types/vue' {
  interface Vue {
    $toast: IToast
  }
}

export const Toast: IToast;
