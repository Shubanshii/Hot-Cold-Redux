const initState = {
    guesses: [25, 55, 35],
    feedback: 'You\'re Hot!',
    auralStatus: '',
    correctAnswer: 27
};

const rootReducer = (state = initState, action) => {
    if (action.type === 'MAKE_GUESS') {
        let newGuesses = state.guesses;
        newGuesses.push(action.guess);
        return {
            ...state,
            guesses: newGuesses
        };
    }
    return state;
};

export default rootReducer;