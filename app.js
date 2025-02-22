function testDay(date = new Date()) {
    const day = date.getDate();
    return day % 2 === 0;
}

module.exports = testDay;