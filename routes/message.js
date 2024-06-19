import express from 'express';
import formData from 'express-form-data';
import { TakeListDiaryConversation } from '../controllers/message.js';
import { TakeListUserLike } from '../controllers/message.js';
import { TakeListComment } from '../controllers/message.js';
import { Dislike } from '../controllers/message.js';
import { NotifySpam } from '../controllers/message.js';
import { SendManyMesByArrayId } from '../controllers/message.js';
import { SendManyMesByClassId } from '../controllers/message.js';
import { LoadMessage } from '../controllers/message.js';
import { LoadMessageLiveChat } from '../controllers/message.js';
import { DeleteMessage } from '../controllers/message.js';
import { RecallMessage } from '../controllers/message.js';
import { EditMessage } from '../controllers/message.js';
import { SetFavoriteMessage } from '../controllers/message.js';
import { RemoveFavoriteMessage } from '../controllers/message.js';
import { GetListFavoriteMessage } from '../controllers/message.js';
import { SetEmotionMessage } from '../controllers/message.js';
import { GetListLibra } from '../controllers/message.js';
import { GetMessage } from '../controllers/message.js';
import { SendMessage } from '../controllers/message.js';
import { DeleteMessageOneSide } from '../controllers/message.js';
import { GetListMessage_v2 } from '../controllers/message.js';
import { UpdateSupportStatusMessage } from '../controllers/message.js';
import { checkBirthday } from '../controllers/message.js';
import { checkPersonSendBirthday } from '../controllers/message.js';
import { personSendBirthday } from '../controllers/message.js';
import { RaoNhanhSendMessageToHHP } from '../controllers/message.js';
import { SendVoice } from '../controllers/message.js';
import { SuggestMessage } from '../controllers/message.js';
import { ShareAvatar } from '../controllers/message.js';
import { uploadVoice } from '../controllers/message.js';
import { SendMessage_v2 } from '../controllers/message.js';
import { SendMessage_v3 } from '../controllers/message.js';
import { pinMessageV2 } from '../controllers/message.js';
import { testBirthday } from '../controllers/message.js';
import { SetDeleteDate } from '../controllers/message.js';
import { LoadMessageV2 } from '../controllers/message.js';
import { OriginalMessage } from '../controllers/message.js';
import { SetClicked } from '../controllers/message.js';
import { SetTimeMissLiveChat } from '../controllers/message.js';
import { GetTimeMissLiveChat } from '../controllers/message.js';
import { RecallListMessage } from '../controllers/message.js';
import { ForwardMessages } from '../controllers/message.js';
import { DeleteListMessageOneSide } from '../controllers/message.js';
import { SendMessageIdChat } from '../controllers/message.js';
import { SendMessageCv } from '../controllers/message.js';
import { DeleteListMessage } from '../controllers/message.js';
import { DeleteAllMessageConversation } from '../controllers/message.js';
import { LoadListMessage } from '../controllers/message.js';
import { SetIpSpam } from '../controllers/message.js';
import { SendMessageImportant } from '../controllers/message.js';
import { ClickMessageNotification } from '../controllers/message.js';
import { SendListMessage } from '../controllers/message.js';
import { CreateAutoMessage } from '../controllers/message.js';
import { ShowAllListAutoMessage } from '../controllers/message.js';
import { GetDetailAutoMessage } from '../controllers/message.js';
import { UpdateAutoMessage } from '../controllers/message.js';
import { DeleteAutoMessage } from '../controllers/message.js';
import { SendAutoMessage } from '../controllers/message.js';
import { SendOptionsMessage } from '../controllers/message.js';
import { SelectOptionMessage } from '../controllers/message.js';
import { checkActiveAutoMessage } from '../controllers/message.js';
import { switchAutoMessageForNews } from '../controllers/message.js';
import { switchAutoMessageForUsers } from '../controllers/message.js';
import { NotificationTimviec365 } from '../controllers/message.js';
import { SendAdsMessage } from '../controllers/message.js';
import { SendAdsMessageV2 } from '../controllers/message.js';
import { CreateAdsMessage } from '../controllers/message.js';
import { EditAdsMessage } from '../controllers/message.js';
import { ShowAllListAdsMessage } from '../controllers/message.js';
import { GetDetailAdsMessage } from '../controllers/message.js';
import { DeleteAdsMessage } from '../controllers/message.js';
import { SendMessageCv_v2 } from '../controllers/message.js';
import { SharePermissionZalo } from '../controllers/message.js';
import { sendMessageZalo } from '../controllers/message.js';
import { LoadMessageZalo } from '../controllers/message.js';
import {
    sendAdsMessageForCandi,
    sendAdsMessageForSaveCV,
    update_status_mess_auto,
    DeleteOptionMessageAuto
} from '../controllers/message.js';
import rateLimit from "express-rate-limit";
const limiter = rateLimit({
    windowMs: 1000,
    max: 2
});
import { uploadImageAds } from '../controllers/file.js';
const router = express.Router();
const arrayInject = [];
// const arrayInject = ['UNION', 'CASE', 'echo','$',  'script', 'drop', 'SELECT', 'timviec365_tbtimviec',  'delete'];

const untiInjection = async(req, res, next) => {
    // const body = req.body;
    // const props = Object.getOwnPropertyNames(body);
    // for (let i = 0; i < props.length; i++) {
    //     let data = String(body[props[i]]);
    //     for (let j = 0; j < arrayInject.length; j++) {
    //         if (data.includes(arrayInject[j])) {
    //             console.log('Du lieu spam');
    //             return res.status(500).json({ error: 'Spam' });
    //         }
    //     }
    // }
    return next();
};
router.post('/loadMessage', formData.parse(), untiInjection, LoadMessage);
router.post('/LoadMessageLiveChat', formData.parse(), untiInjection, LoadMessageLiveChat);
router.post('/takelistdiary', formData.parse(), untiInjection, TakeListDiaryConversation);
router.post('/takelistuserlike', formData.parse(), TakeListUserLike);
router.post('/takelistcomment', formData.parse(), TakeListComment);
router.post('/dislike', formData.parse(), Dislike);
router.post('/notifyspam', formData.parse(), NotifySpam);
router.post('/SendManyMesByArrayId', formData.parse(), untiInjection, SendManyMesByArrayId);
router.post('/SendManyMesByClassId', formData.parse(), untiInjection, SendManyMesByClassId);
router.post('/DeleteMessage', formData.parse(), DeleteMessage);
router.post('/RecallMessage', formData.parse(), RecallMessage);
router.post('/EditMessage', formData.parse(), EditMessage);
router.post('/SetFavoriteMessage', formData.parse(), SetFavoriteMessage);
router.post('/RemoveFavoriteMessage', formData.parse(), RemoveFavoriteMessage);
router.post('/GetListFavoriteMessage', formData.parse(), GetListFavoriteMessage);
router.post('/GetListLibra', formData.parse(), GetListLibra);
router.post('/GetMessage', formData.parse(), GetMessage);
router.post('/SetEmotionMessage', formData.parse(), SetEmotionMessage);
router.post('/SendMessage', formData.parse(), untiInjection, SendMessage);
router.post('/SendMessage_v2', formData.parse(), untiInjection, SendMessage_v2);
router.post('/SendMessage_v3', formData.parse(), untiInjection, SendMessage_v3);
router.post('/GetListMessage_v2', formData.parse(), GetListMessage_v2);
router.post('/UpdateSupportStatusMessage', formData.parse(), UpdateSupportStatusMessage);
router.post('/checkBirthday', formData.parse(), checkBirthday);
router.post('/checkPersonSendBirthday', formData.parse(), checkPersonSendBirthday);
router.post('/personSendBirthday', formData.parse(), personSendBirthday);
router.post('/RaoNhanhSendMessageToHHP', formData.parse(), RaoNhanhSendMessageToHHP);
router.post('/SendVoice', uploadVoice.any(), untiInjection, SendVoice);
router.post('/DeleteMessageOneSide', uploadVoice.any(), DeleteMessageOneSide);
router.post('/SuggestMessage', formData.parse(), SuggestMessage);
router.post('/ShareAvatar', formData.parse(), ShareAvatar);
router.post('/pinMessageV2', formData.parse(), pinMessageV2);
router.post('/testBirthday', formData.parse(), testBirthday);
router.post('/SetDeleteDate', formData.parse(), SetDeleteDate);
router.post('/LoadMessageV2', formData.parse(), LoadMessageV2);
router.post('/OriginalMessage', formData.parse(), OriginalMessage);
router.post('/SetClicked', formData.parse(), SetClicked);
router.post('/SetTimeMissLiveChat', formData.parse(), SetTimeMissLiveChat);
router.get('/GetTimeMissLiveChat', GetTimeMissLiveChat);
router.post('/RecallListMessage', formData.parse(), RecallListMessage);
router.post('/ForwardMessages', formData.parse(), ForwardMessages);
router.post('/DeleteListMessageOneSide', formData.parse(), DeleteListMessageOneSide);
router.post('/SendMessageIdChat', limiter, formData.parse(), untiInjection, SendMessageIdChat);
router.post('/SendMessageCv', formData.parse(), untiInjection, SendMessageCv);
router.post('/DeleteListMessage', formData.parse(), DeleteListMessage);
router.post('/DeleteAllMessageConversation', formData.parse(), DeleteAllMessageConversation);
router.post('/LoadListMessage', formData.parse(), LoadListMessage);
router.post('/SetIpSpam', formData.parse(), SetIpSpam);
router.post('/SendMessageImportant', formData.parse(), untiInjection, SendMessageImportant);
router.post('/ClickMessageNotification', formData.parse(), ClickMessageNotification);
router.post('/SendListMessage', formData.parse(), untiInjection, SendListMessage);
router.post('/ShowAllListAutoMessage', formData.parse(), ShowAllListAutoMessage);
router.post('/CreateAutoMessage', formData.parse(), CreateAutoMessage);
router.post('/GetDetailAutoMessage', formData.parse(), GetDetailAutoMessage);
router.post('/UpdateAutoMessage', formData.parse(), UpdateAutoMessage);
router.post('/DeleteAutoMessage', formData.parse(), DeleteAutoMessage);
router.post('/SendAutoMessage', formData.parse(), SendAutoMessage);
router.post('/SendOptionsMessage', formData.parse(), SendOptionsMessage);
router.post('/SelectOptionMessage', formData.parse(), SelectOptionMessage);
router.post('/NotificationTimviec365', formData.parse(), NotificationTimviec365);
router.post('/SendAdsMessage', formData.parse(), SendAdsMessage);
router.post('/SendAdsMessageV2', formData.parse(), SendAdsMessageV2);
router.post('/CreateAdsMessage', uploadImageAds, CreateAdsMessage);
router.post('/EditAdsMessage', uploadImageAds, EditAdsMessage);
router.post('/ShowAllListAdsMessage', uploadImageAds, ShowAllListAdsMessage);
router.post('/GetDetailAdsMessage', formData.parse(), GetDetailAdsMessage);
router.post('/DeleteAdsMessage', formData.parse(), DeleteAdsMessage);
router.post('/SendMessageCv_v2', formData.parse(), SendMessageCv_v2);
router.post('/SharePermissionZalo', formData.parse(), SharePermissionZalo);
router.post('/sendMessageZalo', formData.parse(), sendMessageZalo);
router.post('/LoadMessageZalo', formData.parse(), LoadMessageZalo);
router.post('/checkActiveAutoMessage', formData.parse(), checkActiveAutoMessage);
router.post('/switchAutoMessageForNews', formData.parse(), switchAutoMessageForNews);
router.post('/switchAutoMessageForUsers', formData.parse(), switchAutoMessageForUsers);
router.post('/sendAdsMessageForCandi', formData.parse(), sendAdsMessageForCandi);
router.post('/sendAdsMessageForSaveCV', formData.parse(), sendAdsMessageForSaveCV);


router.post('/update_status_mess_auto', formData.parse(), update_status_mess_auto);

router.post('/DeleteOptionMessageAuto', formData.parse(), DeleteOptionMessageAuto);

export default router;