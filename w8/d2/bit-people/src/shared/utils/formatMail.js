const newMail = (email) => {
    let nM = email.split('@');
    let a = nM[0];
    let b = a.length;
  

    return a[0] + a[1] + a[2] + "..." + a[b - 1] + a[b - 2] + a[b - 3] + "@" + nM[1];

}



export default newMail