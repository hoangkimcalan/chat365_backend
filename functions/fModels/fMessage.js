import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const Messages = (messageID, conversationID, senderID, messageType, message, listTag, deleteDate, deleteTime, deleteType, isFavorite) => {
  return {
    MessageID: messageID,
    ConversationID: conversationID,
    SenderID: senderID,
    MessageType: messageType,
    Message: message,
    ListTag: listTag,
    DeleteTime: 0,
    DeleteType: 0,
    DeleteDate: deleteDate,
    IsFavorite: 0,
    QuoteMessage: {}
  }
}

export const MessageQuote = (messageID, senderName, senderID, messageType, message, createAt) => {
  return {
    MessageID: messageID,
    SenderID: senderID,
    MessageType: messageType,
    Message: message,
    CreateAt: createAt,
    SenderName: senderName,
  }
}

export const MessagesDB = (id, displayMessage, senderId, messageType, message, quoteMessage, messageQuote, createAt, isEdited, infoLink, listFile, emotion, deleteTime, deleteType, deleteDate, InfoSupport, LiveChatDB, notiClicked, from, uscid, isSecret) => {
  return {
    _id: id,
    displayMessage: displayMessage,
    senderId: senderId,
    messageType: messageType,
    message: message,
    quoteMessage: quoteMessage,
    messageQuote: messageQuote,
    createAt: createAt,
    isEdited: isEdited,
    infoLink: infoLink,
    listFile: listFile,
    emotion: emotion,
    deleteTime: deleteTime,
    deleteType: deleteType,
    deleteDate: deleteDate,
    infoSupport: InfoSupport,
    liveChat: LiveChatDB,
    notiClicked: notiClicked,
    from: from || null,
    uscid: uscid || '',
    isSecret: isSecret || 0
  }
}

export const EmotionMessageDBDefault = () => {
  return {
    Emotion1: "",
    Emotion2: "",
    Emotion3: "",
    Emotion4: "",
    Emotion5: "",
    Emotion6: "",
    Emotion7: "",
    Emotion8: "",
  }
}

export const FileSendDB = (sizeFile, nameFile, height, width) => {
  return {
    sizeFile,
    nameFile,
    height,
    width,
  }
}


export const infoLink = (title, description, linkHome, image, isNotification) => {
  return {
    title,
    description,
    linkHome,
    image,
    isNotification,
  }
}

export const InfoSupportDB = (title, message, supportId, haveConversation, userId, status, time, userName = null, liveChatConversation = 0) => {
  return {
    title,
    message,
    supportId,
    haveConversation,
    userId,
    status,
    time,
    userName,
    liveChatConversation
  }
}

//InfoLiveChat
export const InfoLiveChat = (ClientId, ClientName, ClientAvatar, FromWeb) => {
  return {
    ClientId,
    ClientName,
    ClientAvatar,
    FromWeb
  }
}

export const LiveChatDB = (clientId, clientName, fromWeb, FromConversation) => {
  return {
    clientId,
    clientName,
    fromWeb,
    FromConversation: FromConversation || 0
  }
}

export const getTokenUser = async (req, res) => {
  let user = null;

  if (req.headers.authorization) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token) {
      jwt.verify(token, process.env.NODE_SERCET, (err, result) => {
        if (!err) {
          user = result.data;
        }
      });
    }
  }
  return user;
};