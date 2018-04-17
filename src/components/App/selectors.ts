
import { createStructuredSelector } from "../../state/utils";

import {
    saveFileName,
    isSaveChosen,
    isSaveLoading,
    isSaveSaving,
    loadError
} from "../../services/save-editor/savefile/selectors";


export interface StateProps {
    saveFileName: string | null;
    isSaveChosen: boolean;
    isSaveLoading: boolean;
    isSaveSaving: boolean;
    loadError: Error | null;
}

const mapStateToProps = createStructuredSelector<StateProps>({
    saveFileName,
    isSaveChosen,
    isSaveLoading,
    isSaveSaving,
    loadError
});
export default mapStateToProps;

// Was pretty sure this used to work, once upon a time.
//export type StateProps = typeof mapStateToProps;
