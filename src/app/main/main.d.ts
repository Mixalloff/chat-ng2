declare namespace ChatNamespace {
    interface IUser {
        id: number,
        name: string,
        surname: string,
        avatar: string
    }

    interface IChat {
        id: number,
        participants: Array<IUser>,
        messages: Array<IMessage>
    }

    interface IMessage {
        id: number,
        from: number,
        chatId: number,
        text: string,
        time: string
    }
}