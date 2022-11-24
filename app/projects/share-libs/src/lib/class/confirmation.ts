import { Confirmation } from 'primeng/api';

/**
 * 確認
 */
export class PositiveConfirm implements Confirmation {
  header = '確認';
  acceptLabel = '確認';
  rejectLabel = '取消';
  acceptButtonStyleClass = 'p-button-raised p-button-text';
  rejectButtonStyleClass = 'p-button-raised p-button-danger p-button-text';
  icon = 'pi pi-exclamation-circle';
}

/**
 * 警告-反向確認
 */
export class NegativeConfirm implements Confirmation {
  header = '您確定嗎？';
  acceptLabel = '確認';
  rejectLabel = '取消';
  acceptButtonStyleClass = 'p-button-raised p-button-danger p-button-text';
  rejectButtonStyleClass = 'p-button-raised p-button-secondary p-button-text';
  icon = 'pi pi-exclamation-triangle';
}
