import { createSelector } from "reselect";

// input selector " select dirrectory from directory reducer "
const SelectDirectory = (state)=>state.directory;

// output selector "select section from the directory reducer"
export const selectDirectorySection = createSelector(
    [SelectDirectory],
    (directory) => directory.sections
)