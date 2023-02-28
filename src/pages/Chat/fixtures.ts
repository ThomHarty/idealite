import {IMessage} from '../../ui/templates/ChatTemplate/ChatTemplate.types';

export const messages: IMessage[] = [
  {
    id: '8',
    messageType: 'ndaResponse',
    delivery: 'received',
    ndaResponseMessage: {
      name: 'John Doe',
      isFromAuthedUser: false,
      status: 'accepted',
    },
  },
  {
    id: '7',
    messageType: 'nda',
    delivery: 'sent',
    ndaMessage: {
      id: 'hdi9y',
      name: 'John Doe',
      avatar: 'https://placeimg.com/640/480/people',
      readTime: '18:29',
    },
  },
  {
    id: '1',
    messageType: 'chat',
    delivery: 'sent',
    chatMessage: {
      avatar: 'https://placeimg.com/640/480/people',
      message: 'Sounds good.',
      readTime: '17:52',
    },
  },
  {
    id: '2',
    messageType: 'chat',
    delivery: 'received',
    chatMessage: {
      avatar: 'https://placeimg.com/640/480/people',
      message: 'I will send it through to you tonight.',
    },
  },
  {
    id: '3',
    messageType: 'chat',
    delivery: 'received',
    chatMessage: {
      avatar: 'https://placeimg.com/640/480/people',
      message:
        'Lorem ipsum dolor sit amet, habemus blandit ex cum, ut agam minim virtute pri, ut delicata euripidis necessitatibus has. Epicuri principes euripidis quo ne, in mei novum verterem prodesset. Eu illum gloriatur adversarium nam, no vix cetero adversarium, has appareat appetere posidonium cu. Sit oratio quidam graecis eu, duo at suscipit efficiendi. Posse putent praesent et vim, et debet simul sea.',
    },
  },
  {
    id: '4',
    messageType: 'chat',
    delivery: 'sent',
    chatMessage: {
      avatar: 'https://placeimg.com/640/480/people',
      message:
        'Lorem ipsum dolor sit amet, habemus blandit ex cum, ut agam minim virtute pri, ut delicata euripidis necessitatibus has. Epicuri principes euripidis quo ne, in mei novum verterem prodesset. Eu illum gloriatur adversarium nam, no vix cetero adversarium, has appareat appetere posidonium cu. Sit oratio quidam graecis eu, duo at suscipit efficiendi. Posse putent praesent et vim, et debet simul sea.',
    },
  },
  {
    id: '5',
    messageType: 'chat',
    delivery: 'received',
    chatMessage: {
      avatar: 'https://placeimg.com/640/480/people',
      message:
        'Lorem ipsum dolor sit amet, habemus blandit ex cum, ut agam minim virtute pri, ut delicata euripidis necessitatibus has. Epicuri principes euripidis quo ne, in mei novum verterem prodesset. Eu illum gloriatur adversarium nam, no vix cetero adversarium, has appareat appetere posidonium cu. Sit oratio quidam graecis eu, duo at suscipit efficiendi. Posse putent praesent et vim, et debet simul sea.',
    },
  },
  {
    id: '6',
    messageType: 'nda',
    delivery: 'received',
    ndaMessage: {
      id: 'hdi9y',
      name: 'John Doe',
      avatar: 'https://placeimg.com/640/480/people',
    },
  },
];
