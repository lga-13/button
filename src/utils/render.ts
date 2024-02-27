export default function render(query, block) {
    const root= document.querySelector(query);
    console.log("root", root)
    root.appendChild(block.getContent());
    block.dispatchComponentDidMount();
    return root;
}