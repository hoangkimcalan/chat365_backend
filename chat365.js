import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from "cookie-parser"
import cors from "cors"
import morgan from 'morgan'
import axios from 'axios'
import findmes from "./routes/findmes.js";
import auth from "./routes/auth.js";
import conversations from "./routes/conversations.js";
import users from "./routes/users.js";
import message from "./routes/message.js";
import calendarAppointment from "./routes/calendarAppointment.js";
import diary from "./routes/diary.js";
import file from "./routes/file.js";
import privacy from "./routes/privacy.js";
import personal from "./routes/personal.js";
import notification from "./routes/notification.js";
import fastMessage from "./routes/fastMessage.js";
import liveChat from "./routes/livechat.js";
import mail from "./routes/mail.js";
import logs from "./routes/logs.js";
import fs from 'fs'
import timeout from 'connect-timeout'
import https from 'https'
import compression from 'compression'
import { notificationCalendar } from './controllers/calendarAppointment.js';
import rateLimit from "express-rate-limit";
const app = express();

const indexService = express()
const messageService = express()
const userService = express()
const conversationService = express()
const httpsServer = express()
const serverfile = express()
dotenv.config();

const options = {
    key: fs.readFileSync('/root/app/chat365/main/certificates/privkey.pem'),
    cert: fs.readFileSync('/root/app/chat365/main/certificates/fullchain.pem')
};

const connect = async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/api-base365", { serverSelectionTimeoutMS: 10000 });
        // await mongoose.connect("mongodb://localhost:27017/api-base365");
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", (error) => {
    console.error("MongoDB disconnected with error:", error);
});
mongoose.connection.on('error', function() {
    console.log("Lỗi try vấn")
});

const limiter = rateLimit({
    windowMs: 1000,
    max: 20
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const config = (app) => {
    const apiTimeout = 3 * 1000;

    app.use(compression());
    app.use(cors()) // cho phép truy cập từ mọi client 
    app.use(cookieParser());

    function haltOnTimedout(req, res, next) {
        if (!req.timedout) next()
    }
    // app.use(morgan('dev'));
    //    app.use(morgan('combined'))
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.set("view engine", "ejs");

    app.use(express.static('/root/app/storage/chat365'));
    app.use(express.static('/root/app/storage/base365'));
    app.use(express.static("/root/app/chat365/main/public"));
    // app.use((req, res, next) => {
    //     try {
    //         // Set the timeout for all HTTP requests
    //         req.setTimeout(4000, () => {
    //             try {
    //                 return res.status(200).json({ err: "Request time out" });
    //             } catch (e) {
    //                 return false;
    //             }
    //         });
    //         res.setTimeout(4000, function() {
    //             try {
    //                 return res.status(200).json({ err: "Request time out" });
    //             } catch (e) {
    //                 return false;
    //             }
    //         });
    //         next();
    //     } catch (e) {
    //         console.log("Request không được đáp ứng", e);
    //         return false;
    //     }
    // });
    app.use("/api/conv", findmes);
    app.use("/api/conv/auth", auth);
    app.use("/api/conversations", conversations);
    app.use("/api/users", users);
    app.use("/api/message", message);
    app.use("/api/diary", diary);
    app.use("/api/calendarappointment", calendarAppointment)
    app.use("/api/file", file)
    app.use("/api/personal", personal);
    app.use("/api/V2/Notification", notification)
    app.use("/api/privacy", privacy)
    app.use("/api/mail", mail);
    app.use("/api/logs", logs)
    app.use("/api/fastMessage", fastMessage)
    app.use("/api/liveChat", liveChat)
    app.get("/frontend/takeHistoryAccess", timeout('2s', { respond: false }), haltOnTimedout, async(req, res) => {
        try {
            console.log("Bắt đầu request")
            await sleep(6000);
            console.log("Kết thúc sleep")
            return res.status(200).json({ err: "Response" });
            let count = 0;
            while (true) {
                count = count + 1;
                console.log("Test api request", count);
            }
            return res.render("takeHistoryAccess");
        } catch (e) {
            console.log(e);
            return false;
        }
    });
    app.use(limiter);

}



config(indexService)
config(messageService)
config(userService)
config(conversationService)
config(httpsServer);
config(serverfile);

connect();

serverfile.listen(9002, () => {
    console.log("indexService is running on http://localhost:9002")
})

indexService.listen(9000, () => {
    console.log("indexService is running on http://localhost:9000")
})
messageService.listen(9009, () => {
    console.log("messageService is running on http://localhost:9009")
})
userService.listen(9006, () => {
    console.log("userService is running on http://localhost:9006")
})
conversationService.listen(9007, () => {
    console.log("conversationService is running on http://localhost:9007")
})

const server = https.createServer(options, httpsServer, {
    cors: {
        origin: '*'
    }
});

server.listen(9015, () => {
    connect();
    console.log("Connected to databse");
    console.log("Backend is running on http://localhost:9015")
});

// notificationCalendar()