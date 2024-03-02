import {v4 as makeUUID} from 'uuid';
import EventBus from "./event-bus.ts";
import Handlebars from 'handlebars';

const uuid = makeUUID();

export default class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render",
        FLOW_CDU: "flow:component-did-update"
    }
    _id = null;
    _element = null;
    _meta = null;

    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */

    constructor(tagName = "div", propsAndChildren = {}) {
        console.log("propsAndChildren", propsAndChildren)
        const {children, props} = this._getChildren(propsAndChildren);

        this.children = children;

        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        }

        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        if (props.settings && props.settings.withInternalID) {
            this._id = uuid;
            this.props = this._makePropsProxy({ ...props, __id: this._id });
        } else {
            this.props = this._makePropsProxy(props);
        }
        eventBus.emit(Block.EVENTS.INIT);
    }

    _getChildren(propsAndChildren) {
        const children = {};
        const props = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Array && value.every(element => element instanceof Block) || value instanceof Block )  {
                    console.log("Попало в детей", value)
                    children[key] = value;
            } else {
                console.log("Попало в пропсы", value)
                props[key] = value;
            }
        });
        console.log("children", children)
        return { children, props };
    }

    compile(template, props) {
        console.log("Компиляция шаблона", template)

        // Копируем пропсы
        const propsAndStubs = { ...props };
        console.log("children при compile", this.children)
        Object.entries(this.children).forEach(([key, child]) => {
            console.log("child._id", child._id)
            console.log(key)
            propsAndStubs[key] = `<div data-id="${child._id}"></div>`
        });

        // Создаём новый HTML элемент 'template'
        const fragment = this._createDocumentElement('template');
        console.log("fra", this.children)
        // // Компилируем шаблон с помощью Handlebars и устанавливаем его как innerHTML нашего фрагмента
        // console.log("Обкакались при компиляции блока")
        //
        return Handlebars.compile(template)(propsAndStubs);
        // Заменяем каждый шаблон нашего дочернего компонента на его реальное содержимое
        // Object.values(this.children).forEach(child => {
        //     console.log("child", child)
        //     const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
        //     console.log("stub", stub)
        //     console.log("перед replaceWith", child.getContent())
        //     stub.replaceWith(child.getContent());
        // });
        // return fragment.content
        // Возвращаем содержимое нашего шаблонного фрагмента
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this.componentDidUpdate.bind(this));
    }

    // ----------------------------------------Эмитится Block.EVENTS.INIT ----------------------------------------------
    _createDocumentElement(tagName) {
        const element = document.createElement(tagName);
        console.log("this._id", this._id)
        element.setAttribute('data-id', this._id);
        return element;
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    _init() {
        this._createResources();
    }
    // -----------------------------------------------------------------------------------------------------------------

    // ----------------------------------------Эмитится Block.EVENTS.FLOW_CDU ------------------------------------------
    componentDidUpdate(oldProps, newProps) {
        const response = oldProps.text !== newProps.text;
        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        }
        return response;
    }
    // -----------------------------------------------------------------------------------------------------------------

    // ----------------------------------------Эмитится Block.EVENTS.FLOW_CDM ------------------------------------------

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);

        Object.values(this.children).forEach(child => {
            child.dispatchComponentDidMount();
        });
    }

    componentDidMount() {}
    // -----------------------------------------------------------------------------------------------------------------

    get element() {
        return this._element;
    }

    getContent() {
        return this.element;
    }

    // ----------------------------------------Эмитится Block.EVENTS.FLOW_RENDER ---------------------------------------
    _render() {
        const block = this.render();

        // Удалить старые события через removeEventListener

        this._element.innerHTML = block;
    }

    render() {}
    // -----------------------------------------------------------------------------------------------------------------


    _makePropsProxy(props) {
        const self = this;
        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop, value) {
                const oldProps = { ...self.props };
                target[prop] = value;
                self.componentDidUpdate(oldProps, target)
                //self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
                return true;
            },
            deleteProperty(target, prop) {
                throw new Error("нет доступа");
                return false;
            },
        });
    }

    show() {
        this.element.style.display = "block";
    }

    hide() {
        this.element.style.display = "none";
    }

    _addEvents() {
        const {events = {}} = this.props;

        Object.keys(events).forEach(eventName => {
            this._element.addEventListener(eventName, events[eventName]);
        });
        this._currentEvents = events;
    }

    _removeEvents() {
        if (this._currentEvents) {
            Object.keys(this._currentEvents).forEach(eventName => {
                this._element.removeEventListener(eventName, this._currentEvents[eventName]);
            });
        }
    }

}

