export default function render(query, block) {
    const root= document.querySelector(query);
    console.log("root", root)
    root.appendChild(block.getContent());
    console.log("block", block)
    block.dispatchComponentDidMount();
    return root;
}