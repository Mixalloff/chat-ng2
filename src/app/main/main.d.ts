declare namespace ChatNamespace {
    interface IFriend {
        id: number,
        name: string,
        surname: string,
        avatar: string,
        messages: Array<IMessage>
    }

    interface IMessage {
        from: number,
        text: string,
        time?: string
    }
}