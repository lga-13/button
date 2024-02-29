import EventBus from "./event-bus.ts"
export default class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render",
        FLOW_CDU: "flow:component-did-update"
    }

    _element = null;
    _meta = null;

    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(tagName = "div", props = {}) {
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        }
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        this.props = this._makePropsProxy(props);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this.componentDidUpdate.bind(this));
    }

    // ----------------------------------------Эмитится Block.EVENTS.INIT ----------------------------------------------
    _createDocumentElement(tagName) {
        return document.createElement(tagName);
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
        this._element.innerHTML = this.render();
        this._addEvents();
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
    }

}

