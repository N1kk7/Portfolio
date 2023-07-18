import { createSlice } from "@reduxjs/toolkit";


export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        stateModal: false,
        // modalData: "ololo",
        blockName: "",
        mobileBar: false,
        closeScrollBar: false,
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
        },
        mobileSideBar: (state, param) => {
            switch (param.payload) {
                case "ActiveBar": 
                    state.mobileBar = !state.mobileBar;
                break;
                // case "RemoveBar": 

                
                //     state.mobileBar = false;
                // break;
                // case "CloseScrollBar":
                //     // console.log("call from slice");
                    
                //     // let test:any;

                //     state.closeScrollBar = !state.closeScrollBar
                //     state.mobileBar = false;

                //     console.log(state.closeScrollBar);
                    
                //     // const test = () => {
                //     //  setTimeout(() => {state.closeScrollBar = false}, 1000);


                //     // }
                //     // test();
                // break;

                
            } 

        },
        // mobileBarRemove: (state) => {

        // }

        
    }
})

export const {modalFunc, mobileSideBar} = modalSlice.actions;
export default modalSlice.reducer;