const neededMessage = msg => {
    return msg.toLowerCase() === 'валек' || msg.toLowerCase() === 'валёк';
};

module.exports = neededMessage;