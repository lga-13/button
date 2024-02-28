import "./error404.css";
import Block from "../../components/base/block.ts";
import ErrorTitle from "../../components/title/error-title.ts";
import Link from "../../components/links/link.ts";
import ErrorMessage from "../../components/message/message.ts";

export default class Error404 extends Block {
    constructor(props) {
        super('registration-form', props);
    }
    render() {
        const title = new ErrorTitle({
            class: 'error404__title',
            text: '404'
        });
        const message = new ErrorMessage({
            class: 'error404__message',
            type: 'text',
            text: 'Не в ту дверь...'
        });
        const link = new Link({
            class: 'error404__back-chats',
            type: 'text',
            text: 'вернуться к чатам'
        });

        return `
        <div class="error404">
        ${title.render()}
        ${message.render()}
        ${link.render()}
        </div>
    `;
    }
}