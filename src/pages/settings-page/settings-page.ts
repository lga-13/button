import "./settings-page.css";
import Block from "../../components/base/block.ts";
import Img from "../../components/img/img.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import ButtonWithImage from "../../components/buttons/button_with_img.ts";
import avatar from "../../public/static/img/avatar.svg";
import btnback from "../../public/static/img/btn-back.svg"

export default class settingsPage extends Block {
    constructor(props) {
        super('settings-data', props);
        this.settingsPageFields = this.props.settingsPageFields.map(field => {
            return {
                'label': new Label({
                    'class': 'settings__label',
                    'for': field.name,
                    'text': field.nameru
                }),
                'input': new Input({
                    'class': 'settings__input',
                    'type': 'text',
                    'id': field.name,
                    'name': field.nameru,
                    'placeholder': ''
                })
            };
        });
    }

    render() {
        const img = new Img({
            class: 'settings__img',
            src: avatar,
            alt: 'photo'
        });
        const datalink = new Link({
            class: 'settings__change-data',
            href: "#",
            text: 'Изменить личные данные'
        });
        const passwordlink = new Link({
            class: 'settings__change-password',
            href: "#",
            text: 'Сменить пароль'
        });
        const buttonwithimg = new ButtonWithImage( {
            class: 'settings__btn-back',
            type: 'button',
            href: '',
            src: btnback,
            alt: 'btn'
        })
        const windowlink = new Link({
            class: 'settings-window__link',
            href: "#",
            text: 'Выберите, какие изменения хотите внести.'
        });

        const settingsPageFieldsHtml = this.settingsPageFields.map(field =>
            `${field.label.render()}
             ${field.input.render()}
             <div class="settings-hr">
                 <hr>
             </div>`
            ).join('');

        return `
        <div class="settings-page">
            <form class="settings-data">
                ${img.render()}
                ${settingsPageFieldsHtml}
                ${datalink.render()}
                ${passwordlink.render()}
                ${buttonwithimg.render()}
            </form>
            <div class="settings-window">
                ${windowlink.render()}
            </div>
        </div>
    `;
    }
}