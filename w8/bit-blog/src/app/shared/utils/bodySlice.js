const bodySlice = (body) => {
    let b = body.slice(0, 85) + " ...";
    return b;
}

export default bodySlice;