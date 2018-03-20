const newDate = (date) => {
    let rD = date.slice(0, 10);
    return rD[8] + rD[9] + "." + rD[5] + rD[6] + "." + rD[0] + rD[1] + rD[2] + rD[3];
    
}

// console.log(newDate("1989-06-18 16:53:29"));

export default newDate;