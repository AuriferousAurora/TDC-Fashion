import React from 'react';
import { Notification } from '../../base/notifications/notifications';


export const OrderNotification = (props) => (
  <Notification className={'order-notification'}>
    <span>Order saved</span>
  </Notification>
);