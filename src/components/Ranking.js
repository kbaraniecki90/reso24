import React from 'react';

const Ranking = (props) => {
    // console.log(props)
    let text
    const ranking = props.ranking
    const classRanking = 'color-ranking--' + ranking
    switch (props.ranking) {
        case 1:
            text = 'Naganna'
        break;
        case 2:
            text = 'Nieodpowiednia'
        break;
        case 3:
            text = 'Poprawna'
        break;
        case 4:
            text = 'Dobra'
        break;
        case 5:
            text = 'B. dobra'
        break;
        case 6:
            text = 'Wzorowa'
        break;
        default:
            text = "Błąd"

    }
    return <span className={classRanking}>{text}</span>
}

export { Ranking }