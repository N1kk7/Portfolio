import { createSlice } from "@reduxjs/toolkit";


export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        stateModal: false,
        // modalData: "ololo",
        blockName: "",
        // StarWars: false,
        // weather: false,
        // movie: false,
        // cocktail: false
    },
    reducers: {
        modalFunc: (state, param) => {
            // console.log(state);
            state.stateModal = true;
            // console.log(state.stateModal);
            // console.log(param.payload)
            // console.log(state.modalData)
            // state.modalData = param.payload;
            // console.log(state.modalData)
            switch (param.payload) {
                case "expedia":
                    state.blockName = "expedia";
                    // console.log("expedia ok");
                    break;
                case "StarWars":
                    state.blockName = "StarWars";
                    // console.log("star wars ok");
                    break;
                case "Weather":
                    state.blockName = "Weather";
                    // console.log("weather ok");
                    break;
                case "Movie":
                    state.blockName = "Movie";
                    // console.log("movie ok");
                    break;
                case "Cocktail":
                    state.blockName = "Cocktail";
                    // console.log("cocktail ok");
                    break;
                case "closeModal":
                    state.blockName = "";
                    state.stateModal = false;
                // console.log("close");
                break;
            }
            // console.log(state.stateModal);
        }
    }
})

export const {modalFunc} = modalSlice.actions;
export default modalSlice.reducer;