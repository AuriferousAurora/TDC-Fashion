import React from 'react';
import { Notification } from '../../base/notifications/notifications';

export const NotificationOrder = (props) => (
  <Notification className={'order-notification'}
    message={<span>Order saved</span>}>
  </Notification>
);