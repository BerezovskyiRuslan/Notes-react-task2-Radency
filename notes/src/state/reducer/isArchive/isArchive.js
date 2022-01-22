const def = false;

export default function isArhive(state = def, actions) {
    switch (actions.type) {
        case 'SET_IS_ARCHIVE': {
            state = !state;
            
            return state;
        }
        default: {
            return state
        }
    }
}

export const setIsArchive = () => {
    return {
        type: 'SET_IS_ARCHIVE'
    }
}