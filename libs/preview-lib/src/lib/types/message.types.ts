import { IState } from './home.types';

// Base message interface
export interface BaseMessage {
  type: string;
  data?: any;
}

// Connection messages
export interface ConnectMessage extends BaseMessage {
  type: 'on:connect';
  data: { connected: boolean };
}

export interface DisconnectMessage extends BaseMessage {
  type: 'on:disconnect';
}

// State change messages
export interface StateChangeMessage extends BaseMessage {
  type: 'on:state-change';
  data: {
    state: IState;
    hasAnyChanges?: boolean;
  };
}

// Ping/Pong messages for connection monitoring
export interface PingMessage extends BaseMessage {
  type: 'on:ping';
}

export interface PongMessage extends BaseMessage {
  type: 'on:pong';
}

// Item interaction messages
export interface ItemClickMessage extends BaseMessage {
  type: 'on:item-click';
  data: { id: string };
}

// Command messages from React app to Next.js app
export interface UndoCommand extends BaseMessage {
  type: 'command:undo';
}

export interface RedoCommand extends BaseMessage {
  type: 'command:redo';
}

export interface ObjectEditCommand extends BaseMessage {
  type: 'command:object:edit';
  data: {
    id: string;
    itemType:
      | 'section1'
      | 'section2'
      | 'section3'
      | 'section4'
      | 'section2-child'
      | 'section4-child';
    properties: any;
  };
}

export interface OrderChangeCommand extends BaseMessage {
  type: 'command:order:change';
  data: {
    itemId: string;
    newIndex: number;
    parentId: string;
  };
}

// Setup messages for MessageChannel initialization
export interface NextJsReadyMessage extends BaseMessage {
  type: 'NEXT_JS_READY';
}

export interface InitMessageChannelMessage extends BaseMessage {
  type: 'INIT_MESSAGE_CHANNEL';
}

// Union type for all possible messages
export type PreviewMessage =
  | ConnectMessage
  | DisconnectMessage
  | StateChangeMessage
  | PingMessage
  | PongMessage
  | ItemClickMessage
  | UndoCommand
  | RedoCommand
  | ObjectEditCommand
  | OrderChangeCommand
  | NextJsReadyMessage
  | InitMessageChannelMessage;

// Message type constants for easy reference
export const MESSAGE_TYPES = {
  // Connection
  CONNECT: 'on:connect',
  DISCONNECT: 'on:disconnect',

  // State
  STATE_CHANGE: 'on:state-change',

  // Ping/Pong
  PING: 'on:ping',
  PONG: 'on:pong',

  // Interactions
  ITEM_CLICK: 'on:item-click',

  // Commands
  UNDO: 'command:undo',
  REDO: 'command:redo',
  OBJECT_EDIT: 'command:object:edit',
  ORDER_CHANGE: 'command:order:change',

  // Setup
  NEXT_JS_READY: 'NEXT_JS_READY',
  INIT_MESSAGE_CHANNEL: 'INIT_MESSAGE_CHANNEL',
} as const;

// Type for message type constants
export type MessageType = (typeof MESSAGE_TYPES)[keyof typeof MESSAGE_TYPES];

// Event listener types
export type EventListenerMap = {
  [MESSAGE_TYPES.CONNECT]: (data: { connected: boolean }) => void;
  [MESSAGE_TYPES.DISCONNECT]: () => void;
  [MESSAGE_TYPES.STATE_CHANGE]: (data: {
    state: IState;
    hasAnyChanges?: boolean;
  }) => void;
  [MESSAGE_TYPES.PING]: () => void;
  [MESSAGE_TYPES.PONG]: () => void;
  [MESSAGE_TYPES.ITEM_CLICK]: (data: { id: string }) => void;
  [MESSAGE_TYPES.UNDO]: () => void;
  [MESSAGE_TYPES.REDO]: () => void;
  [MESSAGE_TYPES.OBJECT_EDIT]: (data: {
    id: string;
    itemType: string;
    properties: any;
  }) => void;
  [MESSAGE_TYPES.ORDER_CHANGE]: (data: {
    itemId: string;
    newIndex: number;
    parentId: string;
  }) => void;
  [MESSAGE_TYPES.NEXT_JS_READY]: () => void;
  [MESSAGE_TYPES.INIT_MESSAGE_CHANNEL]: () => void;
};

// Helper type for getting the data type of a message
export type MessageData<T extends MessageType> =
  T extends keyof EventListenerMap ? Parameters<EventListenerMap[T]>[0] : never;

// Helper type for getting the callback type for a specific message type
export type EventListenerCallback<T extends MessageType> =
  T extends keyof EventListenerMap ? EventListenerMap[T] : never;

// Helper type for getting the data type for a specific message type
export type EventListenerData<T extends MessageType> =
  T extends keyof EventListenerMap ? Parameters<EventListenerMap[T]>[0] : never;
